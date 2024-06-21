<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\TarifRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TarifRepository::class)]
#[ApiResource]
class Tarif
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?float $prix_tarif = null;

    #[ORM\Column(length: 255)]
    private ?string $unite_tarif = null;

    #[ORM\ManyToOne(inversedBy: 'tarifs')]
    private ?PublicCible $categorie = null;

    #[ORM\ManyToOne(inversedBy: 'tarifs')]
    private ?Prestation $idPresta = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPrixTarif(): ?float
    {
        return $this->prix_tarif;
    }

    public function setPrixTarif(float $prix_tarif): static
    {
        $this->prix_tarif = $prix_tarif;

        return $this;
    }

    public function getUniteTarif(): ?string
    {
        return $this->unite_tarif;
    }

    public function setUniteTarif(string $unite_tarif): static
    {
        $this->unite_tarif = $unite_tarif;

        return $this;
    }

    public function getCategorie(): ?PublicCible
    {
        return $this->categorie;
    }

    public function setCategorie(?PublicCible $categorie): static
    {
        $this->categorie = $categorie;

        return $this;
    }

    public function getIdPresta(): ?Prestation
    {
        return $this->idPresta;
    }

    public function setIdPresta(?Prestation $idPresta): static
    {
        $this->idPresta = $idPresta;

        return $this;
    }
}
