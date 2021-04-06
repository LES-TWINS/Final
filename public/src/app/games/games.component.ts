import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  gamesArray: any = [
    {imageURL:"https://ubistatic19-a.akamaihd.net/ubicomstatic/ru-ru/global/game-info/fc6-game_info-boxart-keyart-02-348x434-v1_mobile_362807.jpg?imwidth=360"},
    {imageURL:"https://ubistatic19-a.akamaihd.net/ubicomstatic/ru-ru/global/game-info/pop-remake-boxart-keyart-02-560x698-v2-logo_mobile_363264.jpg?imwidth=360"},
    {imageURL:"https://ubistatic19-a.akamaihd.net/ubicomstatic/ru-ru/global/game-info/ac-teal-game_info-boxart-eivor-02-348x434-v2_361688.jpg?imwidth=360"},
    {imageURL:"https://ubistatic19-a.akamaihd.net/ubicomstatic/ru-ru/global/game-info/wdl-gameinfo-boxshot_art-ubinew-02-348x434_350637.jpg?imwidth=360"},
    {imageURL:"https://ubistatic19-a.akamaihd.net/ubicomstatic/ru-ru/global/game-info/agos-search_363271.jpg?imwidth=360"},
    {imageURL:"https://ubistatic19-a.akamaihd.net/ubicomstatic/ru-ru/global/game-info/rr_vignette_ubicom_363243.png?imwidth=360"},
    {imageURL:"https://ubistatic19-a.akamaihd.net/ubicomstatic/ru-ru/global/game-info/ifr-boxart-keyart-01-560x698-v2-logo_350472.jpg?imwidth=360"},
    {imageURL:"https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/cod-mw.jpg"},
    {imageURL:"https://www.activision.com/content/dam/atvi/activision/games/crash/crash-bandicoot-n-sane-trilogy/overview/crash_remastered_agnostic_boxart.jpg"},
    {imageURL:"https://www.activision.com/content/dam/atvi/activision/games/prototype/prototype-biohazard-bundle/overview/Prototype_BNDL_ATVI_225x278.jpg"},
    {imageURL:"https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/cod-wwii.jpg"},
    {imageURL:"https://www.activision.com/content/dam/atvi/activision/games/tony-hawk/tony-hawk-pro-skater/overview/TonyHawkPro_BoxArt.jpg"},
    {imageURL:"https://ubistatic19-a.akamaihd.net/ubicomstatic/ru-ru/global/buy-now/grb_packshot_stadia_349136.jpg"},
    {imageURL:"https://www.activision.com/content/dam/atvi/activision/games/skylanders/skylanders-spyros-adventure/overview/SkylandersSSA_BoxArt.jpg"},
    {imageURL:"https://www.activision.com/content/dam/atvi/activision/games/call-of-duty/call-of-duty-black-ops-3/overview/Boxart.png"},
    {imageURL:"https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/ctr-atvi_225x278.jpg"},
  ]

  constructor() { }

  ngOnInit(): void {
  }
}