<?php

namespace App\Controller\Admin;

use App\Entity\Tarif;
use App\Entity\Prestation;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\{IdField, EmailField, TextField, ArrayField, AssociationField, TextEditorField, ChoiceField, ImageField, DateField, MoneyField, NumberField};

class TarifCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Tarif::class;
    }

    
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            AssociationField::new('idPresta', 'Prestation'),
            AssociationField::new('categorie', 'Public'),
            MoneyField::new('prix_tarif', 'Prix unitaire')->setNumDecimals(2)->setCurrency('EUR'),
            TextField::new('unite_tarif', 'Unité tarifaire'),
        ];
    }
    
}
