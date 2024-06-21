<?php

namespace App\Controller\Admin;

use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\{IdField, EmailField, TextField, ArrayField, AssociationField, TextEditorField, ChoiceField, ImageField, DateField};
use Symfony\Component\Form\Extension\Core\Type\{PasswordType, RepeatedType};
use EasyCorp\Bundle\EasyAdminBundle\Config\{Action, Actions, Crud, KeyValueStore};
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;



class UserCrudController extends AbstractCrudController
{
    public function __construct(
        public UserPasswordHasherInterface $userPasswordHasher
    ) {}

    public static function getEntityFqcn(): string
    {
        return User::class;
    }

    public function configureActions(Actions $actions): Actions
    {
        return $actions
            ->add(Crud::PAGE_EDIT, Action::INDEX)
            ->add(Crud::PAGE_INDEX, Action::DETAIL)
            ->add(Crud::PAGE_EDIT, Action::DETAIL)
            ;
    }
    
    public function configureFields(string $pageName): iterable
    {
        $roles = ['ROLE_SUPER_ADMIN', 'ROLE_ADMIN', 'ROLE_MODERATOR', 'ROLE_USER'];
        $fields = [
            IdField::new('id')->hideOnForm(),
            DateField::new('date')->hideOnForm(),
            EmailField::new('email'),
            AssociationField::new('categorie'),
            TextField::new('lastName', 'Nom / Entreprise / Collectivité'),
            TextField::new('firstName', 'Prenom')->setRequired(false)->setEmptyData(''),
            ChoiceField::new('roles')
            ->setChoices(array_combine($roles, $roles))
            ->allowMultipleChoices()
            ->renderAsBadges(),
            TextField::new('tel'),
            TextField::new('adresse'),
            TextField::new('ville'),
            TextField::new('zip', 'Code Postal'),
            ImageField::new('image')->setUploadDir('assets/images/')
            ->setRequired($pageName === Crud::PAGE_NEW),
            TextEditorField::new('bio'),
        ];

        $password = TextField::new('password')
            ->setFormType(RepeatedType::class)
            ->setFormTypeOptions([
                'type' => PasswordType::class,
                'first_options' => ['label' => 'Password','hash_property_path' => 'password'],
                'second_options' => ['label' => '(Repeat)'],
                'mapped' => false,
            ])
            ->setRequired($pageName === Crud::PAGE_NEW)
            ->onlyOnForms()
            ;
        $fields[] = $password;

        return $fields;
    }

}
