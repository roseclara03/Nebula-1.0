function showInfo(cardId) {
    const details = {
        "water-cycle": `
            <h3>What is the Water Cycle?</h3>
            <p>The water cycle describes the continuous movement of water within the Earth and atmosphere. It involves several processes:</p>
            <ul>
                <li><strong>Evaporation:</strong> Water turns into vapor due to the sun's heat.</li>
                <li><strong>Condensation:</strong> Water vapor cools and forms clouds.</li>
                <li><strong>Precipitation:</strong> Water falls back to Earth in the form of rain, snow, or hail.</li>
                <li><strong>Collection:</strong> Water is stored in oceans, lakes, rivers, and underground aquifers.</li>
            </ul>
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/jFjI6y46QRk?si=JHVaPYZWDNfK9sGD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `,
        "origin-of-water": `
            <h3>Where Did Water Come From?</h3>
            <p>Water likely arrived on Earth through asteroid and comet impacts and volcanic outgassing. These sources contributed to the accumulation of water on the planet. There is also the theory that water may have been formed through chemical reactions early in Earth's history.</p>
            <ul>
                <li><strong>Asteroid Impact:</strong> Water may have been delivered by comets and asteroids.</li>
                <li><strong>Volcanic Activity:</strong> Water vapor released by volcanic eruptions contributed to Earth's atmosphere.</li>
            </ul>
           <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/AUAEBjlROWQ?si=rtcoYeimYNgtBD2d" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `,
        "importance-of-water": `
            <h3>Why is Water Important?</h3>
            <p>Water is essential for all living organisms and the environment. It is required for biological processes such as respiration, digestion, and photosynthesis. It also supports agriculture, ecosystems, and many industrial processes.</p>
            <ul>
                <li><strong>Drinking and Health:</strong> Hydration is essential for survival.</li>
                <li><strong>Agriculture:</strong> Water is necessary for crop irrigation.</li>
                <li><strong>Energy Production:</strong> Hydropower uses the flow of water to generate electricity.</li>
            </ul>
           <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/c-3KCzxEgek?si=i33QPWdzd3UNsFtF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `,
        "water-conservation": `
            <h3>Water Conservation</h3>
            <p>Conserving water is essential for the environment. We can save water through simple practices like turning off taps when not in use, reducing water wastage in agriculture, and recycling water.</p>
            <ul>
                <li><strong>Fix Leaks:</strong> Small leaks can waste a large amount of water over time.</li>
                <li><strong>Efficient Irrigation:</strong> Use efficient irrigation systems to save water in agriculture.</li>
                <li><strong>Rainwater Harvesting:</strong> Collecting rainwater to use for non-potable purposes.</li>
            </ul>
          <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/GsNVrF9UEAQ?si=GbuRHEb7BDAHGQHS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        `,
    };

    document.getElementById('detail-content').innerHTML = details[cardId];
    document.getElementById('detail-section').style.display = 'block';
}
