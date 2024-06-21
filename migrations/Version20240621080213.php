<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240621080213 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE message (id INT AUTO_INCREMENT NOT NULL, auteur_id INT NOT NULL, sujet VARCHAR(255) NOT NULL, date DATE NOT NULL, date_message DATETIME NOT NULL, texte_message LONGTEXT NOT NULL, INDEX IDX_B6BD307F60BB6FE6 (auteur_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE prestation (id INT AUTO_INCREMENT NOT NULL, image_presta VARCHAR(255) NOT NULL, descr_presta LONGTEXT NOT NULL, nom_presta VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE public_cible (id INT AUTO_INCREMENT NOT NULL, categorie VARCHAR(255) NOT NULL, tva DOUBLE PRECISION NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE tarif (id INT AUTO_INCREMENT NOT NULL, categorie_id INT DEFAULT NULL, id_presta_id INT DEFAULT NULL, prix_tarif DOUBLE PRECISION NOT NULL, unite_tarif VARCHAR(255) NOT NULL, INDEX IDX_E7189C9BCF5E72D (categorie_id), INDEX IDX_E7189C93A1A2BD7 (id_presta_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE message ADD CONSTRAINT FK_B6BD307F60BB6FE6 FOREIGN KEY (auteur_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE tarif ADD CONSTRAINT FK_E7189C9BCF5E72D FOREIGN KEY (categorie_id) REFERENCES public_cible (id)');
        $this->addSql('ALTER TABLE tarif ADD CONSTRAINT FK_E7189C93A1A2BD7 FOREIGN KEY (id_presta_id) REFERENCES prestation (id)');
        $this->addSql('ALTER TABLE user ADD categorie_id INT DEFAULT NULL, DROP tva, DROP categorie');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D649BCF5E72D FOREIGN KEY (categorie_id) REFERENCES public_cible (id)');
        $this->addSql('CREATE INDEX IDX_8D93D649BCF5E72D ON user (categorie_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D649BCF5E72D');
        $this->addSql('ALTER TABLE message DROP FOREIGN KEY FK_B6BD307F60BB6FE6');
        $this->addSql('ALTER TABLE tarif DROP FOREIGN KEY FK_E7189C9BCF5E72D');
        $this->addSql('ALTER TABLE tarif DROP FOREIGN KEY FK_E7189C93A1A2BD7');
        $this->addSql('DROP TABLE message');
        $this->addSql('DROP TABLE prestation');
        $this->addSql('DROP TABLE public_cible');
        $this->addSql('DROP TABLE tarif');
        $this->addSql('DROP INDEX IDX_8D93D649BCF5E72D ON user');
        $this->addSql('ALTER TABLE user ADD tva DOUBLE PRECISION DEFAULT NULL, ADD categorie LONGTEXT NOT NULL COMMENT \'(DC2Type:array)\', DROP categorie_id');
    }
}
