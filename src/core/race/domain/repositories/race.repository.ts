export interface RaceRepositoryPort {
  createRace(
    name: string,
    minSpeed: number,
    maxSpeed: number,
    location: string,
  ): Promise<void>;
}
