import { useRequest } from 'alova'
import request from '@/service'

interface GITHUB {
  owner: {
    archive_url: string
    login: string
  }
  full_name: string
  html_url: string
}

interface DOC {
  love_name: string
  luck_name: string
  midbutton: number
  ranking_nologin: string
  ranking_novalue: string
  save_button: string
  save_cancel: string
  save_desc: string
  save_ok: string
  save_title: string
  saveshare: string
  soothsay_again: string
  soothsay_button: string
  soothsaying: string
  today_over: string
  total_title: string
  wealth_name: string
}

export function getGithub() {
  return useRequest(request.Get<GITHUB>('/uniapp-template'))
}

export function getDoc() {
  return useRequest(request.Get<DOC>('/score/documents'))
}
