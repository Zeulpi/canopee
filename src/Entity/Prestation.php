<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use App\Repository\PrestationRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PrestationRepository::class)]
#[ApiResource(operations: [
    new Get(),
    new GetCollection()
])]
class Prestation
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $nomPresta = null;
    
    #[ORM\Column(length: 255)]
    private ?string $imagePresta = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $descrPresta = null;

    /**
     * @var Collection<int, Tarif>
     */
    #[ORM\OneToMany(targetEntity: Tarif::class, mappedBy: 'idPresta')]
    private Collection $tarifs;

    /**
     * @var Collection<int, Message>
     */
    #[ORM\ManyToMany(targetEntity: Message::class, mappedBy: 'prestas')]
    private Collection $messages;


    public function __construct()
    {
        $this->tarifs = new ArrayCollection();
        $this->messages = new ArrayCollection();
    }
    
    public function __toString(): string
    {
        return $this->nomPresta;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getImagePresta(): ?string
    {
        return $this->imagePresta;
    }

    public function setImagePresta(string $imagePresta): static
    {
        $this->imagePresta = $imagePresta;

        return $this;
    }

    public function getDescrPresta(): ?string
    {
        return $this->descrPresta;
    }

    public function setDescrPresta(string $descrPresta): static
    {
        $this->descrPresta = $descrPresta;

        return $this;
    }

    public function getNomPresta(): ?string
    {
        return $this->nomPresta;
    }

    public function setNomPresta(string $nomPresta): static
    {
        $this->nomPresta = $nomPresta;

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
            $tarif->setIdPresta($this);
        }

        return $this;
    }

    public function removeTarif(Tarif $tarif): static
    {
        if ($this->tarifs->removeElement($tarif)) {
            // set the owning side to null (unless already changed)
            if ($tarif->getIdPresta() === $this) {
                $tarif->setIdPresta(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Message>
     */
    public function getMessages(): Collection
    {
        return $this->messages;
    }

    public function addMessage(Message $message): static
    {
        if (!$this->messages->contains($message)) {
            $this->messages->add($message);
            $message->addPresta($this);
        }

        return $this;
    }

    public function removeMessage(Message $message): static
    {
        if ($this->messages->removeElement($message)) {
            $message->removePresta($this);
        }

        return $this;
    }
}
