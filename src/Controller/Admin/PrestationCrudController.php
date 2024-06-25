<?php

namespace App\Controller\Admin;

use App\Entity\Prestation;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Config\{Action, Actions, Crud, KeyValueStore};

class PrestationCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Prestation::class;
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
        return [
            IdField::new('id')->hideOnForm(),
            TextField::new('nom_presta'),
            ImageField::new('image_presta')
            ->setUploadDir('public/images/prestas/')
            ->setBasePath('images/prestas/')
            ->setRequired($pageName === Crud::PAGE_NEW),
            TextEditorField::new('descr_presta'),
        ];
    }
    
}
