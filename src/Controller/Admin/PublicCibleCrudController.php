<?php

namespace App\Controller\Admin;

use App\Entity\PublicCible;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\NumberField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class PublicCibleCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return PublicCible::class;
    }

    
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            TextField::new('categorie'),
            TextField::new('titre'),
            NumberField::new('tva'),
            TextEditorField::new('description'),
        ];
    }
    
}
