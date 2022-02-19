{
    /**
     * Enum
     */
    const MAX_NUM = 6;
    const MAX_STUDENTS_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2;
    const DAYS_ENUM = Object.freeze({'MONDAY': 0, 'TUESDAY': 1, 'WEDNESDAY': 3});
    console.log(DAYS_ENUM.WEDNESDAY);
    type dayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
    enum DAYS {
        Monday = 1,
        Tuesday,
        Wednesday,
        Thursday = '4775',
        Friday = '321',
        Saturday = '33',
        Sunday = '123'
    }

    console.log(DAYS.Sunday);
    let day: DAYS = DAYS.Saturday;
    day = DAYS.Sunday;
    day = 10;
    console.log(day);

    let dayOfWeek: dayOfWeek = 'Monday';
    dayOfWeek = 'Wednesday';
    console.log(dayOfWeek);

}