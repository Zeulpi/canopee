<?php

namespace App\Controller\Admin;

use App\Entity\Entreprise;
use App\Entity\Mention;
use App\Entity\User;
use App\Entity\Tarif;
use App\Entity\Message;
use App\Entity\Prestation;
use App\Entity\PublicCible;
use App\Entity\Reseau;
use App\Entity\Slider;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;


class DashboardController extends AbstractDashboardController
{
    #[Route('/admin', name: 'admin')]
    public function index(): Response
    {
        // return parent::index();

        // Option 1. You can make your dashboard redirect to some common page of your backend
        //
        $adminUrlGenerator = $this->container->get(AdminUrlGenerator::class);
        return $this->redirect($adminUrlGenerator->setController(UserCrudController::class)->generateUrl());

        // Option 2. You can make your dashboard redirect to different pages depending on the user
        //
        // if ('jane' === $this->getUser()->getUsername()) {
        //     return $this->redirect('...');
        // }

        // Option 3. You can render some custom template to display a proper dashboard with widgets, etc.
        // (tip: it's easier if your template extends from @EasyAdmin/page/content.html.twig)
        //
        // return $this->render('some/path/my-dashboard.html.twig');
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('Canopee');
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::linkToDashboard('Dashboard', 'fa fa-home');
        // yield MenuItem::linkToCrud('The Label', 'fas fa-list', EntityClass::class);
        yield MenuItem::linkToCrud('Membres', 'fas fa-user', User::class);
        yield MenuItem::linkToCrud('Messages', 'fas fa-user', Message::class);
        yield MenuItem::linkToCrud('Prestations', 'fas fa-user', Prestation::class);
        yield MenuItem::linkToCrud('Public cible', 'fas fa-user', PublicCible::class);
        yield MenuItem::linkToCrud('Tarifs', 'fas fa-user', Tarif::class);
        yield MenuItem::linkToCrud('Sliders', 'fas fa-user', Slider::class);
        yield MenuItem::linkToCrud('Infos Entreprise', 'fas fa-user', Entreprise::class);
        yield MenuItem::linkToCrud('Reseaux sociaux', 'fas fa-user', Reseau::class);
        yield MenuItem::linkToCrud('Mentions', 'fas fa-user', Mention::class);
    }
}
