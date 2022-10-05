const products = [
    {
       name: 'Tanjiro Figurine',
       productimage: "https://cdn.shopify.com/s/files/1/0014/2648/9388/products/ultra-tokyo-connection-pvc-scale-figures-demon-slayer-tanjiro-kamado-sibling-bonds-spm-figure-28830721736748_360x.jpg?v=1633125477",
       price: 29.99,
       productdescription: "Size ~8in. Introducing the Demon Slayer: Kimetsu no Yaiba SPM Figure 'Tanjiro Kamado' -Sibling Bonds- from SEGA!  Tanjiro's hand hangs at his side,  allowing for Nezuko's hand to hold Tanjiro's.", 
       inventory: 5
    },
    {
        name: 'Nezuko Figurine',
        productimage: "https://cdn.shopify.com/s/files/1/0014/2648/9388/products/ultra-tokyo-connection-pvc-scale-figures-demon-slayer-nezuko-kamado-sibling-bonds-spm-figure-28830642208812_360x.jpg?v=1652906392",
        price: 29.99,
        productdescription: "Size~ 8in. Introducing the Demon Slayer: Kimetsu no Yaiba SPM Figure 'Nezuko Kamado' -Sibling Bonds- from SEGA!",
        inventory: 5
    },
    {
        name: 'Soul Eater -Complete Series- Blu-ray',
        productimage: "https://cdn.shopify.com/s/files/1/0014/2648/9388/products/technicolor-universal-blu-ray-soul-eater-complete-series-classic-blu-ray-31106399666220_360x.jpg?v=1659485576",
        price: 35.99,
        productdescription: "FROM THE STUDIO THAT BROUGHT YOU FULLMETAL ALCHEMIST AND COWBOY BE-BOP Set in the Shinigami technical school for weapon meisters, the series revolves around 3 groups of each a weapon meister and a human weapon. Trying to make the latter a 'Death Scythe' and thus fit for use by the Shinigami, they must collect the souls of 99 evil humans and 1 witch. Soul Eater is an anime that centers around meisters and their weapons and their mission to collect 99 evil souls and 1 witch soul. Upon doing that the meister's weapons will become a Deathscythe, which is the highest title for a weapon. Maka, Soul Eater, Black Star, Tsubaki, Death the Kid, and Patty and Liz Thompson are the characters Soul Eater revolves around. Besides taking the time to gather souls these students of Shibusen defend Death City from some of the most powerful of creatures while still attending school and trying to become stronger.",
        inventory: 3
    },
    {
        name: 'That Time I Got Reincarnated As A Slime - Season 2 Part 2 blu-ray',
        productimage: "https://cdn.shopify.com/s/files/1/0014/2648/9388/products/technicolor-universal-blu-ray-dvd-that-time-i-got-reincarnated-as-a-slime-season-2-part-2-blu-ray-dvd-limited-edition-30887304265772_2000x2000.jpg?v=1657747864",
        price: 65.99,
        productdescription: "After saving a village from an army and ascending to Demon Lord, Rimuru restores his fallen citizens. Will his desire for peace cost him his soul?",
        inventory: 3
    },
    {
        name: 'Chainsaw Man Manga Volume 1',
        productimage: "https://www.rightstufanime.com/images/productImages/9781974709939_manga-chainsaw-man-volume-1-primary.jpg?resizeid=5&resizeh=1000&resizew=1000",
        price: 9.99,
        productdescription: "Denji's a poor young man who'll do anything for money, even hunting down devils with his pet devil-dog Pochita. He's a simple man with simple dreams, drowning under a mountain of debt. But his sad life gets turned upside down one day when he's betrayed by someone he trusts. Now with the power of a devil inside him, Denji's become a whole new man—Chainsaw Man!",
        inventory: 10
    },
    {
        name: "Fire Force Manga Volume 1",
        productimage: "https://www.rightstufanime.com/images/productImages/9781632363305_manga-fire-force-1-primary.jpg?resizeid=5&resizeh=1000&resizew=1000",
        price: 9.99,
        productdescription: "Fire Force manga Volume 1 features story and art by Atsushi Ohkubo the author of Soul Eater. It's the year 198 of the Age of the Sun and Tokyo is a crowded cosmopolis. But the world's most populous city is threatened by devils that cause people to burst into flame at random! The only ones who can stop it are the Pyrofighters, a team of specialized firefighters.The young Shinra, blessed with the ability to ignite his feet and travel at the speed of a rocket, wants nothing more than to be a hero, and knows that this is the place for him! But hes not the best at following orders...",
        inventory: 10
    },
    {
        name:"Jujutsu Kaisen - Toge Inumaki Nendoroid",
        productimage:"https://cdn.shopify.com/s/files/1/0014/2648/9388/products/ultra-tokyo-connection-nendoroids-jujutsu-kaisen-toge-inumaki-nendoroid-31754949525548_2000x2000.png?v=1664895649",
        price: 51.99,
        productdescription: "Size ~3.9in 'Salmon.' From the anime series 'Jujutsu Kaisen' comes a Nendoroid of Toge Inumaki! He comes with three face plates including a standard expression, a combat expression, and a smiling expression. He can be displayed with his neck warmer opened or closed so you can recreate a variety of situations using his interchangeable faceplates. Toge's throat medicine, and an onigiri rice ball are optional add-ons. Be sure to add him to your collection, and enjoy displaying him with your other Nendoroids from 'Jujutsu Kaisen!",
        inventory: 10
    },
    {
        name: "Naruto Shippuden - Naruto Uzumaki Q Posket (Ver A)",
        productimage: "https://cdn.shopify.com/s/files/1/0014/2648/9388/products/banpresto-chibi-figures-naruto-shippuden-naruto-uzumaki-q-posket-ver-a-29617521688620_2000x2000.jpg?v=1643763290",
        price: 25.99,
        productdescription: `Size ~5in From the hit anime series Naruto: Shippuden comes a Q Posket figure of Naruto Uzumaki! Each Q Posket figure stands over 5 inches, making them perfect for collecting and displaying anywhere.`,
        inventory: 7
    },
    {
        name: "Spy X Family - Family Acrylic Keychain",
        productimage: "https://cdn.shopify.com/s/files/1/0014/2648/9388/products/gee-keychains-spy-x-family-family-acrylic-keychain-31502210891820_2000x2000.jpg?v=1663091150",
        price: 8.95,
        productdescription: "From the hit manga turned anime series SPYxFAMILY comes this beautifully made accessory perfect for any set of keys or bag! The Acrylic keychains are hand made and have as much love as Anya does for her new family!",
        inventory: 25
    },
    {
        name: "Tokyo Revengers - Manjiro Sano Figure",
        productimage: "https://cdn.shopify.com/s/files/1/0014/2648/9388/products/banpresto-pvc-scale-figures-tokyo-revengers-manjiro-sano-figure-28744932065324_2000x2000.jpg?v=1632645779",
        price: 25.99,
        productdescription: `From the Tokyo Revengers series comes another figure of Mikey, AKA Manjirou Sano! Banpresto's Tokyo Revengers Mikey figure measures around 6 inches tall and stands in a cool pose with his coat draped over his shoulders.`,
        inventory: 4
    },
    {
        name: "Attack On Titan - Final Season - Part 1 - Limited Edition - Blu-Ray + DVD",
        productimage: "https://cdn.shopify.com/s/files/1/0014/2648/9388/products/funimation-placeholder-blu-ray-attack-on-titan-final-season-part-1-limited-edition-29850202112044_2000x2000.jpg?v=1647295189",
        price: 62.99,
        productdescription: `The Scout Regiment have just discovered the existence of Marley, the nation determined to eradicate their people. Now with the dark history of the Titans uncovered, they plan to set out for the world beyond their walls. Will Paradis finally know freedom? Includes: 32-Page Art Digibook, 3 Exclusive Enamel Pins, 5 Art Cards`,
        inventory: 3
    },
    {
        name: "Haikyu!! - Shoyo Hinata Pop Up Parade",
        productimage: "https://cdn.shopify.com/s/files/1/0014/2648/9388/products/ultra-tokyo-connection-pvc-scale-figures-haikyu-shoyo-hinata-pop-up-parade-re-run-30449197121580_2000x2000.jpg?v=1654024189",
        price: 42.99,
        productdescription: `Size ~6in The Karasuno High School Volleyball Club's "Ultimate Decoy" POP UP PARADE is a series of figures that are easy to collect with affordable prices and speedy releases! Each figure typically stands around 17-18cm in height and the series features a vast selection of characters from popular anime and game series, with many more to be added soon! From the popular volleyball anime "HAIKYU!! TO THE TOP" comes a POP UP PARADE figure of the Karasuno High School Volleyball Club's "ultimate decoy" Shoyo Hinata! Be sure to display him with POP UP PARADE Tobio Kageyama, also available!`,
        inventory: 12
    }
]

module.exports = {products}