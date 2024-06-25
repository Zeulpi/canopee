<?php

namespace App\Entity;

use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use App\Repository\PublicCibleRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Attribute\Groups;
use ApiPlatform\Metadata\ApiFilter;
use ApiPlatform\Doctrine\Orm\Filter\SearchFilter;

#[ORM\Entity(repositoryClass: PublicCibleRepository::class)]
#[ApiResource(operations: [
    new Get(),
    new GetCollection()
], normalizationContext: ['groups' => ['tarifs_read', 'public_read']])]
#[ApiFilter(SearchFilter::class, properties: ['categorie' => 'exact'])]
class PublicCible
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['tarifs_read', 'public_read'])]
    private ?string $categorie = null;

    #[ORM\Column]
    #[Groups(['tarifs_read', 'public_read'])]
    private ?float $tva = null;

    /**
     * @var Collection<int, Tarif>
     */
    #[ORM\OneToMany(targetEntity: Tarif::class, mappedBy: 'categorie')]
    private Collection $tarifs;

    #[ORM\Column(length: 255)]
    #[Groups(['public_read'])]
    private ?string $titre = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Groups(['public_read'])]
    private ?string $description = null;

    public function __construct()
    {
        $this->tarifs = new ArrayCollection();
    }

    public function __toString(): string
    {
        return $this->categorie;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCategorie(): ?string
    {
        return $this->categorie;
    }

    public function setCategorie(string $categorie): static
    {
        $this->categorie = $categorie;

        return $this;
    }

    public function getTva(): ?float
    {
        return $this->tva;
    }

    public function setTva(float $tva): static
    {
        $this->tva = $tva;

        return $this;
    }

    /**
     * @return Collection<int, Tarif>
     */
    public function getTarifs(): Collection
    {
        return $this->tarifs;
    }

    public function addTarif(Tarif $tarif): static
    {
        if (!$this->tarifs->contains($tarif)) {
            $this->tarifs->add($tarif);
            $tarif->setCategorie($this);
        }

        return $this;
    }

    public function removeTarif(Tarif $tarif): static
    {
        if ($this->tarifs->removeElement($tarif)) {
            // set the owning side to null (unless already changed)
            if ($tarif->getCategorie() === $this) {
                $tarif->setCategorie(null);
            }
        }

        return $this;
    }

    public function getTitre(): ?string
    {
        return $this->titre;
    }

    public function setTitre(string $titre): static
    {
        $this->titre = $titre;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }
}
