<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
-->

<!-- PROJECT LOGO -->
<br />
  <div align="center">
    <a href="https://github.com/FreedomWriter/compendium"><div style="width: 250px; height: 250px;">
    <img src="https://github.com/FreedomWriter/compendium/assets/50391354/e5003306-9f69-4485-aed1-6c1ed2611c67" alt="Image" width="250" height="250" ></a>
  </div>

<h1 align="center">Breath of the Wild Compendium</h1>

  <p align="start">
    Ever been playing Breath of the Wild and wondered if you've truly "caught them all"? Where here's your chance to see everything the compendium has to offer?
  </p>
    <p align="start">
    This application allows you explore data about creatures, equipment, materials, monsters and treasure found in Hyrule (that can be stored in your compendium). You can <strong>sort</strong> creatures
  </p>
  <h2 id="#feature-overview align="start">Feature Overview</h2>
  <ul align="start">
  <li>View a gallery of images based on your selected category.
  <h3>Sorting Options:</h3>
  <ul>
  <li>Creatures - see all, edible, or inedible creatures</li>
  <li>Monsters - see monsters found in default play mode or filter by Master play mode.</li>
  
  </ul>
   </li>
   <li>Click on any item in the gallery and see more details about that item.</li>
  </ul>
    <a href="https://hyrue-compendium.netlify.app/">View Demo</a>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul></ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
<!--         <li><a href="#prerequisites">Prerequisites</a></li> -->
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
<!--     <li><a href="#usage">Usage</a></li> -->
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
<!--     <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li> -->
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<img width="1510" alt="desktop view of app" src="https://github.com/FreedomWriter/compendium/assets/50391354/b008e991-b1eb-440d-bfdb-2e6cb2f0c8e3"/>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [[React][React.js]](https://react.dev/)
- [React Focus Lock](https://www.npmjs.com/package/react-focus-lock)
  - Focus Lock ensures that when your modal is open, the element you want the user to be focused on, is in focus, AND when they close the modal, they are focused on the element they were on before opening the modal. The internet is for everybody!
- [React Remove Scroll](https://www.npmjs.com/package/react-remove-scroll)
  - React Remove Scroll makes prevent the back ground from scrolling while viewing a modal, a snap!
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/docs/intro)
- [Styled Components](https://styled-components.com/)
- [TanStack Query](https://tanstack.com/query/)
  - Tanstack query allows us to ensure our server state remains in sync and lets us take advantage of cached data from fetches (in this project, I've set a near infinite cache and stale time, but we normally wouldn't want to do this, you can read more about why [here](https://www.codemzy.com/blog/react-query-cachetime-staletime#:~:text=cacheTime%20vs%20staleTime&text=For%20a%20quick%20recap%3A,re%2Dfetch%20from%20the%20server))
- [Hyrule Compendium API](https://gadhagod.github.io/Hyrule-Compendium-API/#/?id=master_modeentry)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/FreedomWriter/compendium.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start development server
   ```sh
   npm start
   ```
4. Have fun!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [ ] Testing plan
  - [ ] Write unit tests to cover all hooks
  - [ ] Write intergration tests to ensure the following behave as expected:
    - [ ] Filtering by Creature type (all, edible, inedible)
    - [ ] Filtering by Monster type (master mode, default)
- [ ] Search capability
  - [ ] The api does support searching, however only for exact matches, so this needs to be implemented client side
- [x] Detailed view
  - [x] Create a Modal component
  - [x] Create card component
  - [x] Render Card in Modal when a Tile is clicked

See the [open issues](https://github.com/github_username/repo_name/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT
## Contact

Your Name - [@twitter_handle](https://twitter.com/twitter_handle) - email@email_client.com

Project Link: [https://github.com/github_username/repo_name](https://github.com/github_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p>-->

<!-- ACKNOWLEDGMENTS
## Acknowledgments

* []()
* []()
* []()-->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links
[contributors-shield]: https://img.shields.io/github/contributors/FreedomWriter/compendium.svg?style=for-the-badge
[contributors-url]: https://github.com/FreedomWriter/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/FreedomWriter/compendium.svg?style=for-the-badge
[forks-url]: https://github.com/FreedomWriter/compendium/network/members
[stars-shield]: https://img.shields.io/github/stars/FreedomWriter/compendium.svg?style=for-the-badge
[stars-url]: https://github.com/FreedomWriter/compendium/stargazers
[issues-shield]: https://img.shields.io/github/issues/FreedomWriter/compendium.svg?style=for-the-badge
[issues-url]: https://github.com/FreedomWriter/compendium/issues
[license-shield]: https://img.shields.io/github/license/FreedomWriter/compendium.svg?style=for-the-badge
[license-url]: https://github.com/FreedomWriter/compendium/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555-->

## Large Tablet:

<div align="center">
<img width="350" alt="large tablet view" src="https://github.com/FreedomWriter/compendium/assets/50391354/108e27cc-ae86-46d3-9319-e502de491c67"/></div>
<br></br>
                                                                                                                                         
## Small Tablet:

<div align="center">
<img width="350" alt="small tablet view" src="https://github.com/FreedomWriter/compendium/assets/50391354/ff2aa842-2c8f-4869-851a-04208753293a"/></div>
<br></br>                                                                                                                                      

## Mobile:

<div align="center">
<img width="350" alt="mobile view" src="https://github.com/FreedomWriter/compendium/assets/50391354/0e475724-d7b4-44fb-973c-0125cb1608a5"/></div>
