<?php

namespace App\Controller\Admin;

use App\Entity\Entreprise;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\MoneyField;
use EasyCorp\Bundle\EasyAdminBundle\Field\NumberField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Config\{Action, Actions, Crud, KeyValueStore};

class EntrepriseCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Entreprise::class;
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
            TextField::new('nom'),
            NumberField::new('siret', 'N° Siret'),
            TextField::new('adresse'),
            TextField::new('tel'),
            TextField::new('email'),
            NumberField::new('numTva'),
            MoneyField::new('capital')->setNumDecimals(0)->setCurrency('EUR'),
            TextField::new('hebergeur'),
            TextEditorField::new('description'),
        ];
    }
    
}
