export interface Quarterly {
    quarterId?: string;
    quarterColor?: string;
    quarterTitle?: string;
    quarterIntro?: string;
    weekly?: {
        weekIndex?: number;
        dateRange?: string;
        daily?: {
            dayIndex?: number;
            dayName?: string;
            date?: string;
            lessonTitle?: string;
            pictureName?: string;
            memoryText?: string;
            read?: string;
            firstParagraph?: string;
            secondParagraph?: string;
            thirdParagraph?: string;
            fourthParagraph?: string;
            fifthParagraph?: string;
            callPhrase?: string;
        }
    }
}
