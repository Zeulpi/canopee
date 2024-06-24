<?php

namespace App\Controller\Admin;

use App\Entity\Message;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\CollectionField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class MessageCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Message::class;
    }

    
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            DateTimeField::new('dateMessage')->hideOnForm(),
            TextField::new('firstName', 'Prenom'),
            TextField::new('lastName', 'Nom'),
            TextField::new('email'),
            TextField::new('tel'),
            TextField::new('adresse'),
            TextField::new('ville'),
            TextField::new('zip', 'Code postal'),
            CollectionField::new('prestas')->hideOnForm(),
            AssociationField::new('prestas')->onlyOnForms(),
            TextEditorField::new('texteMessage'),
        ];
    }
}
