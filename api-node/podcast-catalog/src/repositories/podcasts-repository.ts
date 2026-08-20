import fs from "fs";
import path from "path";
import { PodcastModel } from "../models/podcast-model";
import { AllTypeEncode } from "../utils/type-encode";



const pathData = path.join(__dirname, "../repositories/podcast.json");

export const repositoryPodcast = async (
    podcastName?: string
): Promise<PodcastModel[]> => {
    const rawdData = fs.readFileSync(pathData, AllTypeEncode.UTF8);
    let jsonFile = JSON.parse(rawdData);

    if(podcastName){
        jsonFile = jsonFile.filter(
            (podcast: PodcastModel) => podcast.podcastName === podcastName
        );
    }

    return jsonFile;
}