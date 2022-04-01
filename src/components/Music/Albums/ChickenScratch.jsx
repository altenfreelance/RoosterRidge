import React from 'react';
import { Helmet } from "react-helmet";

import Album from '../Album';

export default function ChickenScratch() {

    return (

        <div>
            <Helmet>
                <title>Chicken Scratch</title>
                {/* TODO REMOVE to ALLOW CRAWLING IN FUTURE?? */}
                <meta name="robots" content="noindex" />
            </Helmet>
            <Album
                title="Chicken Scratch"
                abouts={
                    [
                        "Recorded at:  Technology Concierge Services",
                        "Recording and Mastering:  Dave Bauer",
                        "Produced by:  Rooster Ridge and Dave Bauer"
                    ]
                }
                songs={[
                    {
                        title: "Crawford County Critter Line",
                        instrumentation:
                            [
                                "Bryce - Lead vocals, harmonica",
                                "Joey - Vocals",
                                "Greg - Banjo",
                                "Andrew - Mandolin",
                                "Jacob - Vocals, guitar",
                                "Jamie - Vocals, bass",
                                "Vince - Dobro"
                            ]
                    },
                    {
                        title: "Honest Man",
                        instrumentation:
                            [
                                "Bryce - Lead vocals, harmonica",
                                "Joey - Vocals",
                                "Greg - Banjo",
                                "Andrew - Mandolin",
                                "Jacob - Vocals, guitar, percussion",
                                "Jamie - Vocals, bass",
                                "Vince - Dobro"
                            ]

                    },
                    {
                        title: "Summertime Kid",
                        instrumentation:
                            [
                                "Bryce - Vocals, harmonica",
                                "Joey - Lead vocals",
                                "Greg - Banjo",
                                "Andrew - Electric guitar",
                                "Jacob - Vocals, drums",
                                "Jamie - Vocals, bass, piano, organ",
                                "Vince - Dobro",
                            ]
                    },
                    {
                        title: "Moonshine Rev. 4",
                        instrumentation:
                            [
                                "Bryce - Vocals, harmonica",
                                "Greg - Banjo",
                                "Andrew - Dobro",
                                "Jacob - Guitar",
                                "Jamie - Bass"
                            ]
                    },
                    {
                        title: "The Life and Times of Rodney Fine",
                        instrumentation:
                            [
                                "Bryce - Vocals, harmonica",
                                "Greg - Banjo",
                                "Andrew - Vocals, mandolin, dobro",
                                "Jacob - Vocals, guitar",
                                "Jamie - Lead vocals, bass, organ"
                            ]
                    },
                    {
                        title: "Blood in the Soil",
                        instrumentation:
                            [
                                "Bryce - Lead vocals, trumpet, harmonica ",
                                "Greg - Banjo",
                                "Andrew - Vocals, mandolin, dobro",
                                "Jacob - Vocals, guitar",
                                "Jamie - Vocals, bass, percussion",
                            ]
                    },
                    {
                        title: "Barley and Rye",
                        instrumentation:
                            [
                                "Bryce - Lead vocals, harmonica",
                                "Greg - Banjo",
                                "Andrew - Dobro",
                                "Jacob - Vocals, guitar, percussion",
                                "Jamie - Vocals, bass"
                            ]

                    },
                    {
                        title: "This Here Song",
                        instrumentation:
                            [
                                "Bryce - Lead vocals, harmonica, jaw harp",
                                "Joey - Vocals",
                                "Greg - Banjo",
                                "Andrew - Mandolin",
                                "Jacob - Vocals, guitar",
                                "Jamie - Vocals, bass",
                                "Vince - Dobro",
                                "Daydream Raps - Jacob, Vince, Joey, Vince, Bryce"
                            ]
                    }
                ]} />
        </div>
    )
}