<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\SliderRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: SliderRepository::class)]
#[ApiResource]
class Slider
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::ARRAY, nullable: true)]
    private ?array $images = null;

    #[ORM\Column(length: 255)]
    private ?string $sliderName = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getImages(): ?array
    {
        return $this->images;
    }

    public function setImages(?array $images): static
    {
        $this->images = $images;

        return $this;
    }

    public function getSliderName(): ?string
    {
        return $this->sliderName;
    }

    public function setSliderName(string $sliderName): static
    {
        $this->sliderName = $sliderName;

        return $this;
    }
}
