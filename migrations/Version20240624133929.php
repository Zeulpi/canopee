<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240624133929 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE message_prestation (message_id INT NOT NULL, prestation_id INT NOT NULL, INDEX IDX_9E18A332537A1329 (message_id), INDEX IDX_9E18A3329E45C554 (prestation_id), PRIMARY KEY(message_id, prestation_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE message_prestation ADD CONSTRAINT FK_9E18A332537A1329 FOREIGN KEY (message_id) REFERENCES message (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE message_prestation ADD CONSTRAINT FK_9E18A3329E45C554 FOREIGN KEY (prestation_id) REFERENCES prestation (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE message_prestation DROP FOREIGN KEY FK_9E18A332537A1329');
        $this->addSql('ALTER TABLE message_prestation DROP FOREIGN KEY FK_9E18A3329E45C554');
        $this->addSql('DROP TABLE message_prestation');
    }
}
