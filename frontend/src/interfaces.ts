export interface Root {
  cpuCurrentSpeed: CpuCurrentSpeed
  fullLoad: number
  services: any[]
  mem: Mem
  networkInterfaces: NetworkInterface[]
  versions: Versions
}

export interface CpuCurrentSpeed {
  min: number
  max: number
  avg: number
  cores: number[]
}

export interface Mem {
  total: number
  used: number
  free: number
}

export interface NetworkInterface {
  iface: string
  ip4: string
  mac: string
  default: boolean
}

export interface Versions {
  apache: string
  gcc: string
  git: string
  nginx: string
  node: string
  npm: string
  postgresql: string
  python3: string
}
