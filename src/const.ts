export enum AppRoute {
  Home = '/',
  // Quest = '/quest',
  Quest = '/detailed-quest/:id',
  QuestPathPart = '/detailed-quest/', // потом заменить путь на странице src/components/home/components/quest-item/quest-item.tsx
  Contacts = '/contacts',
  Order = '/orders',
  NotFound = '/404',
}

export enum DifficultLevel {
  easy = 'простой',
  medium = 'средний',
  hard = 'сложный',
}

export enum Genre {
  adventure = 'Приключения',
  horror = 'Ужасы',
  mystic = 'Мистика',
  detective = 'Детектив',
  'sci-fi' = 'Sci-fi',
}

export enum Genres {
  All = 'All quests',
  Adventure = 'Adventure',
  Horror = 'Horror',
  Mystic = 'Mystic',
  Detective = 'Detective',
  SciFi = 'Sci-Fi',
}

// - на странице src/components/home/components/quests-catalog/quests-catalog.tsx починить вкладки
// - на странице src/components/detailed-quest/detailed-quest.tsx не грузится фон
