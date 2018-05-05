import { Repository } from '../models/repository.interface';
import { USER_LIST } from '../moks/user.moks';

const repositoryList: Repository[] = [
    {
        name: 'Ionic 3 Camera',
        description: 'This repository shows the usage of Camera functionality within the Ionic 3',
        owner: USER_LIST[0]
    },
    {
        name: 'Ionic 3 Geolocation',
        description: 'This repository shows the usage of Geolocation functionality within the Ionic 3',
        owner: USER_LIST[0]
    },
    {
        name: 'Ionic 3 SMS',
        description: 'This repository shows the usage of SMS functionality within the Ionic 3',
        owner: USER_LIST[1]
    },
    {
        name: 'Ionic 3 Vibration',
        description: 'This repository shows the usage of Vibration functionality within the Ionic 3',
        owner: USER_LIST[1]
    }
]

export const REPOSITORY_LIST = repositoryList;