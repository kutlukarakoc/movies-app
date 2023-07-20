export interface Credits {
  id: number
  cast: CastProps[]
  crew: CrewProps[]
}

export interface CastProps {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path?: string
  cast_id: number
  character: string
  credit_id: string
  order: number
  roles?: SerieCastProps[]
}

type SerieCastProps = {
  credit_id: string
  character: string
  episode_count: number
}

interface CrewProps {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path?: string
  credit_id: string
  department: string
  job: string
}
