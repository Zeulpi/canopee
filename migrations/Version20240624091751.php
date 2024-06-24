<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240624091751 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE message DROP FOREIGN KEY FK_B6BD307F60BB6FE6');
        $this->addSql('DROP INDEX IDX_B6BD307F60BB6FE6 ON message');
        $this->addSql('ALTER TABLE message ADD last_name VARCHAR(255) NOT NULL, ADD email VARCHAR(255) NOT NULL, ADD tel VARCHAR(255) NOT NULL, ADD adresse VARCHAR(255) DEFAULT NULL, ADD ville VARCHAR(255) NOT NULL, ADD zip VARCHAR(255) NOT NULL, DROP auteur_id, CHANGE sujet first_name VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D649BCF5E72D');
        $this->addSql('DROP INDEX IDX_8D93D649BCF5E72D ON user');
        $this->addSql('ALTER TABLE user DROP categorie_id, DROP tel, DROP adresse, DROP ville, DROP zip');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE message ADD auteur_id INT NOT NULL, ADD sujet VARCHAR(255) NOT NULL, DROP first_name, DROP last_name, DROP email, DROP tel, DROP adresse, DROP ville, DROP zip');
        $this->addSql('ALTER TABLE message ADD CONSTRAINT FK_B6BD307F60BB6FE6 FOREIGN KEY (auteur_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_B6BD307F60BB6FE6 ON message (auteur_id)');
        $this->addSql('ALTER TABLE user ADD categorie_id INT DEFAULT NULL, ADD tel VARCHAR(255) NOT NULL, ADD adresse VARCHAR(255) NOT NULL, ADD ville VARCHAR(255) NOT NULL, ADD zip VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D649BCF5E72D FOREIGN KEY (categorie_id) REFERENCES public_cible (id)');
        $this->addSql('CREATE INDEX IDX_8D93D649BCF5E72D ON user (categorie_id)');
    }
}
