<?php

namespace App\Controller\Admin;

use App\Entity\Prestation;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\MoneyField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
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
            ImageField::new('images')
            ->setUploadDir('public/images/prestas/')
            ->setBasePath('images/prestas/')
            ->setFormTypeOption('multiple', true)
            ->setFormTypeOption('validation_groups', false)
            ->setUploadedFileNamePattern('[name]-[uuid].[extension]'),
            ImageField::new('icones')
            ->setUploadDir('public/images/prestas/')
            ->setBasePath('images/prestas/')
            ->setFormTypeOption('multiple', true)
            ->setFormTypeOption('validation_groups', false)
            ->setUploadedFileNamePattern('[name]-[uuid].[extension]'),
            MoneyField::new('tarifDefaut', 'Prix unitaire')->setNumDecimals(2)->setCurrency('EUR'),
            TextField::new('uniteDefaut', 'Unité tarifaire'),
            TextEditorField::new('descr_presta'),
        ];
    }
    
}
