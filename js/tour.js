pannellum.viewer("panorama", {
  default: {
    firstScene: "01",
    autoLoad: true,
    //"author": "Matthew Petroff",
    sceneFadeDuration: 1000,
  },

  scenes: {
    "01": {
      title: "Entrada",
      hfov: 110,
      pitch: -3,
      yaw: 180,
      type: "equirectangular",
      panorama: "https://i.imgur.com/AFxVnbD.jpg",
      hotSpots: [
        {
          pitch: -30.1,
          yaw: 180.0,
          type: "scene",
          cssClass: "custom-hotspot",
          //"createTooltipFunc": hotspot,
          //"createTooltipArgs": "Art Museum Drive",
          sceneId: "02",
        },
      ],
    },

    "02": {
      title: "Entrada",
      hfov: 110,
      yaw: 5,
      type: "equirectangular",
      panorama: "https://i.imgur.com/b9jtg4k.jpg",
      hotSpots: [
        {
          pitch: -30.1,
          yaw: 0.0,
          type: "scene",
          cssClass: "custom-hotspot",
          createTooltipFunc: hotspot,
          createTooltipArgs: "Lobby",
          sceneId: "03",
        },
        {
          pitch: -30.1,
          yaw: 180.0,
          type: "scene",
          cssClass: "custom-hotspot",
          createTooltipFunc: hotspot,
          createTooltipArgs: "Inicio",
          sceneId: "01",
        },
      ],
    },

    "03": {
      title: "Lobby",
      hfov: 110,
      yaw: 5,
      type: "equirectangular",
      panorama: "https://i.imgur.com/Mz13YFN.jpg",
      hotSpots: [
        {
          pitch: -30.1,
          yaw: 180.0,
          type: "scene",
          cssClass: "custom-hotspot",
          //"createTooltipFunc": hotspot,
          //"createTooltipArgs": "Inicio",
          sceneId: "02",
        },
        {
          pitch: -30.1,
          yaw: 30.0,
          type: "scene",
          cssClass: "custom-hotspot",
          //"createTooltipFunc": hotspot,
          //"createTooltipArgs": "Inicio",
          sceneId: "04",
        },
      ],
    },

    "04": {
      title: "Lobby",
      hfov: 110,
      yaw: 190,
      type: "equirectangular",
      panorama: "https://i.imgur.com/3BSPlHC.jpg",
      hotSpots: [
        {
          pitch: -30.1,
          yaw: 30.0,
          type: "scene",
          cssClass: "custom-hotspot",
          //"createTooltipFunc": hotspot,
          //"createTooltipArgs": "Inicio",
          sceneId: "03",
        },
        {
          pitch: -30.1,
          yaw: 210.0,
          type: "scene",
          cssClass: "custom-hotspot",
          //"createTooltipFunc": hotspot,
          //"createTooltipArgs": "Inicio",
          sceneId: "05",
        },
      ],
    },

    "05": {
      title: "Oficinas",
      hfov: 110,
      yaw: 270,
      type: "equirectangular",
      panorama: "https://i.imgur.com/AK9uJwn.jpg",
      hotSpots: [
        {
          pitch: -30.1,
          yaw: 100.0,
          type: "scene",
          cssClass: "custom-hotspot",
          createTooltipFunc: hotspot,
          createTooltipArgs: "Lobby",
          sceneId: "04",
        },
        {
          pitch: -30.1,
          yaw: 270.0,
          type: "scene",
          cssClass: "custom-hotspot",
          createTooltipFunc: hotspot,
          createTooltipArgs: "Oficinas",
          sceneId: "06",
        },
      ],
    },
    "06": {
      title: "Oficinas",
      hfov: 110,
      yaw: 5,
      type: "equirectangular",
      panorama: "https://i.imgur.com/Xjw0bfn.jpg",
      hotSpots: [
        {
          pitch: -30.1,
          yaw: 0.0,
          type: "scene",
          cssClass: "custom-hotspot",
          //"createTooltipFunc": hotspot,
          //"createTooltipArgs": "Lobby",
          sceneId: "07",
        },
        {
          pitch: -30.1,
          yaw: 140.0,
          type: "scene",
          cssClass: "custom-hotspot",
          //"createTooltipFunc": hotspot,
          //"createTooltipArgs": "Inicio",
          sceneId: "05",
        },
      ],
    },
    "07": {
      title: "Oficinas",
      hfov: 110,
      yaw: 5,
      type: "equirectangular",
      panorama: "https://i.imgur.com/3UV4t75.jpg",
      hotSpots: [
        {
          pitch: -30.1,
          yaw: 0.0,
          type: "scene",
          cssClass: "custom-hotspot",
          //"createTooltipFunc": hotspot,
          //"createTooltipArgs": "Lobby",
          sceneId: "08",
        },
        {
          pitch: -35.1,
          yaw: 150.0,
          type: "scene",
          cssClass: "custom-hotspot",
          //"createTooltipFunc": hotspot,
          //"createTooltipArgs": "Inicio",
          sceneId: "06",
        },
      ],
    },
    "08": {
      title: "Oficinas",
      hfov: 110,
      yaw: 220,
      type: "equirectangular",
      panorama: "https://i.imgur.com/HBweNfB.jpg",
      hotSpots: [
        {
          pitch: -30.1,
          yaw: 180.0,
          type: "scene",
          cssClass: "custom-hotspot",
          //"createTooltipFunc": hotspot,
          //"createTooltipArgs": "Lobby",
          sceneId: "09",
        },
        {
          pitch: -30.1,
          yaw: 0.0,
          type: "scene",
          cssClass: "custom-hotspot",
          //"createTooltipFunc": hotspot,
          //"createTooltipArgs": "Inicio",
          sceneId: "07",
        },
      ],
    },
    "09": {
      title: "Oficinas",
      hfov: 110,
      yaw: 265,
      type: "equirectangular",
      panorama: "https://i.imgur.com/n15nHSc.jpg",
      hotSpots: [
        {
          pitch: -30.1,
          yaw: 350.0,
          type: "scene",
          cssClass: "custom-hotspot",
          //"createTooltipFunc": hotspot,
          //"createTooltipArgs": "Inicio",
          sceneId: "08",
        },
        {
          pitch: -40.1,
          yaw: 130.0,
          type: "scene",
          cssClass: "custom-hotspot",
          //"createTooltipFunc": hotspot,
          //"createTooltipArgs": "Inicio",
          sceneId: "10",
        },
        {
          pitch: -30,
          yaw: 265,
          type: "scene",
          cssClass: "custom-hotspot",
          //"createTooltipFunc": hotspot,
          //"createTooltipArgs": "Inicio",
          sceneId: "11",
        },
      ],
    },
    "10": {
      title: "Oficinas",
      hfov: 110,
      yaw: 180,
      type: "equirectangular",
      panorama: "https://i.imgur.com/31zXRQG.jpg",
      hotSpots: [
        {
          pitch: -30.1,
          yaw: 350.0,
          type: "scene",
          cssClass: "custom-hotspot",
          //"createTooltipFunc": hotspot,
          //"createTooltipArgs": "Inicio",
          sceneId: "09",
        },
        {
          pitch: -30.1,
          yaw: 190.0,
          type: "scene",
          cssClass: "custom-hotspot",
          //"createTooltipFunc": hotspot,
          //"createTooltipArgs": "Inicio",
          sceneId: "10-1A",
        },
        {
          pitch: -30.1,
          yaw: 150.0,
          type: "scene",
          cssClass: "custom-hotspot",
          //"createTooltipFunc": hotspot,
          //"createTooltipArgs": "Inicio",
          sceneId: "10-2A",
        },
      ],
    },

    "10-1A": {
      title: "Oficinas",
      hfov: 110,
      yaw: 350,
      type: "equirectangular",
      panorama: "https://i.imgur.com/acmoJbd.jpg",
      hotSpots: [
        {
          pitch: -20.1,
          yaw: 0.0,
          type: "scene",
          cssClass: "custom-hotspot",
          //"createTooltipFunc": hotspot,
          //"createTooltipArgs": "Inicio",
          sceneId: "10-1B",
        },
        {
          pitch: -20.1,
          yaw: 320.0,
          type: "scene",
          cssClass: "custom-hotspot",
          //"createTooltipFunc": hotspot,
          //"createTooltipArgs": "Inicio",
          sceneId: "10-1C",
        },
        {
          pitch: -40.1,
          yaw: 140.0,
          type: "scene",
          cssClass: "custom-hotspot",
          //"createTooltipFunc": hotspot,
          //"createTooltipArgs": "Inicio",
          sceneId: "10",
        },
      ],
    },
    "10-1B": {
      title: "Oficinas",
      hfov: 110,
      yaw: 360.0,
      type: "equirectangular",
      panorama: "https://i.imgur.com/ruvBF1a.jpg",
      hotSpots: [
        {
          pitch: -30.1,
          yaw: 310.0,
          type: "scene",
          cssClass: "custom-hotspot",
          //"createTooltipFunc": hotspot,
          //"createTooltipArgs": "Inicio",
          sceneId: "10-1A",
        },
        {
          pitch: -30.1,
          yaw: 50.0,
          type: "scene",
          cssClass: "custom-hotspot",
          //"createTooltipFunc": hotspot,
          //"createTooltipArgs": "Inicio",
          sceneId: "10-1C",
        },
      ],
    },
    "10-1C": {
      title: "Oficinas",
      hfov: 110,
      yaw: 330.0,
      type: "equirectangular",
      panorama: "https://i.imgur.com/KYQSFAc.jpg",
      hotSpots: [
        {
          pitch: -20.1,
          yaw: 310.0,
          type: "scene",
          cssClass: "custom-hotspot",
          //"createTooltipFunc": hotspot,
          //"createTooltipArgs":"Inicio",
          sceneId: "10-1B",
        },
        {
          pitch: -20.1,
          yaw: 0.0,
          type: "scene",
          cssClass: "custom-hotspot",
          //"createTooltipFunc": hotspot,
          //"createTooltipArgs": "Inicio",
          sceneId: "10-1A",
        },
      ],
    },

    "10-2A": {
      title: "Oficinas",
      hfov: 110,
      yaw: 350,
      type: "equirectangular",
      panorama: "https://i.imgur.com/Qj6HXUi.jpg",
      hotSpots: [
        {
          pitch: -20.1,
          yaw: 320.0,
          type: "scene",
          cssClass: "custom-hotspot",
          //"createTooltipFunc": hotspot,
          //"createTooltipArgs": "Inicio",
          sceneId: "10-2B",
        },

        {
          pitch: -30.1,
          yaw: 170.0,
          type: "scene",
          cssClass: "custom-hotspot",
          //"createTooltipFunc": hotspot,
          //"createTooltipArgs": "Inicio",
          sceneId: "10",
        },
      ],
    },
    "10-2B": {
      title: "Oficinas",
      hfov: 110,
      yaw: 360.0,
      type: "equirectangular",
      panorama: "https://i.imgur.com/VWOD7TR.jpg",
      hotSpots: [
        {
          pitch: -40.1,
          yaw: 230.0,
          type: "scene",
          cssClass: "custom-hotspot",
          //"createTooltipFunc": hotspot,
          //"createTooltipArgs": "Inicio",
          sceneId: "10-2A",
        },
      ],
    },

    "11": {
      title: "Oficinas",
      hfov: 110,
      yaw: 224,
      type: "equirectangular",
      panorama: "https://i.imgur.com/ki9cKMg.jpg",
      hotSpots: [
        {
          pitch: -30.1,
          yaw: 224.0,
          type: "scene",
          cssClass: "custom-hotspot",
          //"createTooltipFunc": hotspot,
          //"createTooltipArgs": "Inicio",
          sceneId: "12",
        },
        {
          pitch: -30.1,
          yaw: 44,
          type: "scene",
          cssClass: "custom-hotspot",
          //"createTooltipFunc": hotspot,
          //"createTooltipArgs": "Inicio",
          sceneId: "09",
        },
        {
          pitch: -30.1,
          yaw: 140,
          type: "scene",
          cssClass: "custom-hotspot",
          createTooltipFunc: hotspot,
          createTooltipArgs: "Sala de juntas",
          sceneId: "11-1A",
        },
      ],
    },

    "11-1A": {
      title: "Sala de juntas",
      hfov: 110,
      yaw: 20.0,
      type: "equirectangular",
      panorama: "https://i.imgur.com/KwdF6Ss.jpg",
      hotSpots: [
        {
          pitch: -20.1,
          yaw: 30.0,
          type: "scene",
          cssClass: "custom-hotspot",
          //"createTooltipFunc": hotspot,
          //"createTooltipArgs": "Inicio",
          sceneId: "11-1B",
        },

        {
          pitch: -30.1,
          yaw: 170.0,
          type: "scene",
          cssClass: "custom-hotspot",
          createTooltipFunc: hotspot,
          createTooltipArgs: "Oficinas",
          sceneId: "11",
        },
      ],
    },
    "11-1B": {
      title: "Sala de juntas",
      hfov: 110,
      yaw: 100.0,
      type: "equirectangular",
      panorama: "https://i.imgur.com/XIRCJRi.jpg",
      hotSpots: [
        {
          pitch: -40.1,
          yaw: 100.0,
          type: "scene",
          cssClass: "custom-hotspot",
          //"createTooltipFunc": hotspot,
          //"createTooltipArgs": "Inicio",
          sceneId: "11-1A",
        },
      ],
    },
    "12": {
      title: "Oficinas",
      hfov: 110,
      yaw: 270,
      type: "equirectangular",
      panorama: "https://i.imgur.com/Ot6EYCm.jpg",
      hotSpots: [
        {
          pitch: -20.1,
          yaw: 300.0,
          type: "scene",
          cssClass: "custom-hotspot",
          //"createTooltipFunc": hotspot,
          //"createTooltipArgs": "Inicio",
          sceneId: "13",
        },
        {
          pitch: -30.1,
          yaw: 90.0,
          type: "scene",
          cssClass: "custom-hotspot",
          //"createTooltipFunc": hotspot,
          //"createTooltipArgs": "Inicio",
          sceneId: "11",
        },
      ],
    },
    "13": {
      title: "Oficinas",
      hfov: 110,
      yaw: 0,
      type: "equirectangular",
      panorama: "https://i.imgur.com/AdEdBnB.jpg",
      hotSpots: [
        {
          pitch: -20.1,
          yaw: -130.0,
          type: "scene",
          cssClass: "custom-hotspot",
          //"createTooltipFunc": hotspot,
          //"createTooltipArgs": "Inicio",
          sceneId: "11",
        },
        {
          pitch: -20.1,
          yaw: 0,
          type: "scene",
          cssClass: "custom-hotspot",
          //"createTooltipFunc": hotspot,
          //"createTooltipArgs": "Inicio",
          sceneId: "14",
        },
      ],
    },
    "14": {
      title: "Oficinas",
      hfov: 110,
      yaw: 150,
      type: "equirectangular",
      panorama: "https://i.imgur.com/lYaKvMn.jpg",
      hotSpots: [
        {
          pitch: -20.1,
          yaw: 0,
          type: "scene",
          cssClass: "custom-hotspot",
          //"createTooltipFunc": hotspot,
          //"createTooltipArgs": "Inicio",
          sceneId: "13",
        },
        {
          pitch: -20.1,
          yaw: 260.0,
          type: "scene",
          cssClass: "custom-hotspot",
          createTooltipFunc: hotspot,
          createTooltipArgs: "Diseño",
          sceneId: "14-1A",
        },
        {
          pitch: -30.1,
          yaw: 80.0,
          type: "scene",
          cssClass: "custom-hotspot",
          //"createTooltipFunc": hotspot,
          //"createTooltipArgs": "Diseño",
          sceneId: "15",
        },
      ],
    },
    "14-1A": {
      title: "Diseño",
      hfov: 110,
      yaw: 150,
      type: "equirectangular",
      panorama: "https://i.imgur.com/lC6QOKT.jpg",
      hotSpots: [
        {
          pitch: -20.1,
          yaw: 0,
          type: "scene",
          cssClass: "custom-hotspot",
          createTooltipFunc: hotspot,
          createTooltipArgs: "Oficinas",
          sceneId: "14",
        },
        {
          pitch: -20.1,
          yaw: 180.0,
          type: "scene",
          cssClass: "custom-hotspot",
          //"createTooltipFunc": hotspot,
          //"createTooltipArgs": "Diseño",
          sceneId: "14-1B",
        },
      ],
    },

    "14-1B": {
      title: "Diseño",
      hfov: 110,
      yaw: 310,
      type: "equirectangular",
      panorama: "https://i.imgur.com/RXn0Wxc.jpg",
      hotSpots: [
        {
          pitch: -35.1,
          yaw: 310.0,
          type: "scene",
          cssClass: "custom-hotspot",
          //"createTooltipFunc": hotspot,
          //"createTooltipArgs": "Oficinas",
          sceneId: "14-1A",
        },
      ],
    },
    "15": {
      title: "Oficinas",
      hfov: 110,
      yaw: 175,
      type: "equirectangular",
      panorama: "https://i.imgur.com/ulSMGpY.jpg",
      hotSpots: [
        {
          pitch: -25.1,
          yaw: 340.0,
          type: "scene",
          cssClass: "custom-hotspot",
          //"createTooltipFunc": hotspot,
          //"createTooltipArgs": "Oficinas",
          sceneId: "14",
        },
        {
          pitch: -25.1,
          yaw: 120.0,
          type: "scene",
          cssClass: "custom-hotspot",
          //"createTooltipFunc": hotspot,
          //"createTooltipArgs": "Oficinas",
          sceneId: "15-2A",
        },
        {
          pitch: -25.1,
          yaw: 230.0,
          type: "scene",
          cssClass: "custom-hotspot",
          //"createTooltipFunc": hotspot,
          //"createTooltipArgs": "Oficinas",
          sceneId: "15-1A",
        },
      ],
    },
    "15-1A": {
      title: "Oficinas",
      hfov: 110,
      yaw: 175,
      type: "equirectangular",
      panorama: "https://i.imgur.com/BMgvQiI.jpg",
      hotSpots: [
        {
          pitch: -30.1,
          yaw: 30,
          type: "scene",
          cssClass: "custom-hotspot",
          //"createTooltipFunc": hotspot,
          //"createTooltipArgs": "Oficinas",
          sceneId: "15",
        },
        {
          pitch: -30.1,
          yaw: 175,
          type: "scene",
          cssClass: "custom-hotspot",
          //"createTooltipFunc": hotspot,
          //"createTooltipArgs": "Oficinas",
          sceneId: "15-1B",
        },
      ],
    },
    "15-1B": {
      title: "Oficinas",
      hfov: 110,
      yaw: 0,
      type: "equirectangular",
      panorama: "https://i.imgur.com/LhOq6HU.jpg",
      hotSpots: [
        {
          pitch: -30.1,
          yaw: 260,
          type: "scene",
          cssClass: "custom-hotspot",
          //"createTooltipFunc": hotspot,
          //"createTooltipArgs": "Oficinas",
          sceneId: "15-1A",
        },
      ],
    },
    "15-2A": {
      title: "Oficinas",
      hfov: 110,
      yaw: 200,
      type: "equirectangular",
      panorama: "https://i.imgur.com/PTYG97o.jpg",
      hotSpots: [
        {
          pitch: -30.1,
          yaw: 340,
          type: "scene",
          cssClass: "custom-hotspot",
          //"createTooltipFunc": hotspot,
          //"createTooltipArgs": "Oficinas",
          sceneId: "15",
        },
        {
          pitch: -30.1,
          yaw: 200,
          type: "scene",
          cssClass: "custom-hotspot",
          //"createTooltipFunc": hotspot,
          //"createTooltipArgs": "Oficinas",
          sceneId: "15-2B",
        },
      ],
    },
    "15-2B": {
      title: "Oficinas",
      hfov: 110,
      yaw: 180,
      type: "equirectangular",
      panorama: "https://i.imgur.com/TKTT5HF.jpg",
      hotSpots: [
        {
          pitch: -30.1,
          yaw: 270,
          type: "scene",
          cssClass: "custom-hotspot",
          //"createTooltipFunc": hotspot,
          //"createTooltipArgs": "Oficinas",
          sceneId: "15-2A",
        },
      ],
    },
  },
});

// Hot spot creation function
function hotspot(hotSpotDiv, args) {
  hotSpotDiv.classList.add("custom-tooltip");
  var span = document.createElement("span");
  span.innerHTML = args;
  hotSpotDiv.appendChild(span);
  span.style.width = span.scrollWidth - 20 + "px";
  span.style.marginLeft =
    -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + "px";
  span.style.marginTop = -span.scrollHeight - 12 + "px";
}
