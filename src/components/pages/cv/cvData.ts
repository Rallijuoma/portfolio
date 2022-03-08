export interface IEducation {
    schoolType: string;
    schoolName: string;
    eduStart: string;
    eduEnd: string;
    key: number;
}


export const educationData: IEducation[] = [
    {
        key: 0,
        schoolType: 'Primary School',
        schoolName: 'Studied at Harjulan ala-aste',
        eduStart: '2011',
        eduEnd: '2017',
    },
    {
        key: 1,
        schoolType: 'Junior High School',
        schoolName: 'Studied at Isoniitun koulu',
        eduStart: '2017',
        eduEnd: '2020',
    },
    {
        key: 2,
        schoolType: 'Vocational Qualification',
        schoolName: 'Vocational college Varia: Myyrmäki office',
        eduStart: '2020',
        eduEnd: '',
    }
]
export interface IWork {
    workTitle: string;
    workPlace: string;
    workStart: string;
    workEnd: string;
    key: number;
}

export const workData:IWork [] = [
    {
        key: 0,
        workTitle: 'Postman in on-the-job learning',
        workPlace: 'Klaukkala post office',
        workStart: '12.2.2018',
        workEnd: '16.2.2018',
    },
    {
        key: 1,
        workTitle: 'Postman in on-the-job learning',
        workPlace: 'Klaukkala post office',
        workStart: '11.2.2019',
        workEnd: '22.2.2019',
    }
]