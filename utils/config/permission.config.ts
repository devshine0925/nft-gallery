import { PartialConfig, Prefix } from './types'

const hasCreate: PartialConfig = {
  dot: false,
  ksm: false,
  rmrk: false,
}

const hasInsight: PartialConfig = {
  ahk: false,
  ahp: false,
  dot: false,
}

const hasSales: PartialConfig = {
  ahk: false,
  dot: false,
  ahp: false,
}

const hasMassmintCreate: PartialConfig = {
  dot: false,
}

const hasExplorer: PartialConfig = {
  dot: false,
}

export const createVisible = (prefix: Prefix | string): boolean => {
  return hasCreate[prefix] ?? true
}

export const seriesInsightVisible = (prefix: Prefix | string) => {
  return hasInsight[prefix] ?? true
}

export const massmintCreateVisible = (prefix: Prefix | string) => {
  return hasMassmintCreate[prefix] ?? true
}

export const salesVisible = (prefix: Prefix | string) => {
  return hasSales[prefix] ?? true
}

export const dropsVisible = (prefix: Prefix | string) => {
  return prefix === 'ahk' || prefix === 'ahp'
}

export const explorerVisible = (prefix: Prefix | string): boolean => {
  return hasExplorer[prefix] ?? true
}
