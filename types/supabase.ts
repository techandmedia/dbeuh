export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      area: {
        Row: {
          area_id: string
          area_level: number
          area_name: string
          area_parent_id: string | null
          country_code: string | null
          created: string
          updated: string
        }
        Insert: {
          area_id: string
          area_level: number
          area_name: string
          area_parent_id?: string | null
          country_code?: string | null
          created?: string
          updated?: string
        }
        Update: {
          area_id?: string
          area_level?: number
          area_name?: string
          area_parent_id?: string | null
          country_code?: string | null
          created?: string
          updated?: string
        }
      }
      bank: {
        Row: {
          bank_id: number
          bank_name: string
          created: string
          updated: string
        }
        Insert: {
          bank_id?: number
          bank_name: string
          created?: string
          updated?: string
        }
        Update: {
          bank_id?: number
          bank_name?: string
          created?: string
          updated?: string
        }
      }
      brand: {
        Row: {
          brand_code: string
          brand_id: number
          brand_image_path: string | null
          brand_name: string
          brand_slug: string
          created: string | null
          item_cat1_kategori: number | null
          updated: string | null
        }
        Insert: {
          brand_code: string
          brand_id?: number
          brand_image_path?: string | null
          brand_name: string
          brand_slug: string
          created?: string | null
          item_cat1_kategori?: number | null
          updated?: string | null
        }
        Update: {
          brand_code?: string
          brand_id?: number
          brand_image_path?: string | null
          brand_name?: string
          brand_slug?: string
          created?: string | null
          item_cat1_kategori?: number | null
          updated?: string | null
        }
      }
      cash_master: {
        Row: {
          bank_account_number: string | null
          bank_account_owner: string | null
          bank_id: number | null
          cash_master_id: number
          cash_master_name: string
          cash_type: Database["public"]["Enums"]["cash_type"]
          created: string
          updated: string | null
        }
        Insert: {
          bank_account_number?: string | null
          bank_account_owner?: string | null
          bank_id?: number | null
          cash_master_id?: number
          cash_master_name: string
          cash_type: Database["public"]["Enums"]["cash_type"]
          created?: string
          updated?: string | null
        }
        Update: {
          bank_account_number?: string | null
          bank_account_owner?: string | null
          bank_id?: number | null
          cash_master_id?: number
          cash_master_name?: string
          cash_type?: Database["public"]["Enums"]["cash_type"]
          created?: string
          updated?: string | null
        }
      }
      cash_retail: {
        Row: {
          bank_account_number: string | null
          bank_account_owner: string | null
          bank_id: number | null
          cash_retail_id: number
          cash_retail_name: string
          cash_type: Database["public"]["Enums"]["cash_type"]
          created: string
          kios_user_id: number
          updated: string | null
        }
        Insert: {
          bank_account_number?: string | null
          bank_account_owner?: string | null
          bank_id?: number | null
          cash_retail_id?: number
          cash_retail_name: string
          cash_type: Database["public"]["Enums"]["cash_type"]
          created?: string
          kios_user_id: number
          updated?: string | null
        }
        Update: {
          bank_account_number?: string | null
          bank_account_owner?: string | null
          bank_id?: number | null
          cash_retail_id?: number
          cash_retail_name?: string
          cash_type?: Database["public"]["Enums"]["cash_type"]
          created?: string
          kios_user_id?: number
          updated?: string | null
        }
      }
      division: {
        Row: {
          created: string
          division_id: number
          division_level: number
          division_name: string
          updated: string | null
        }
        Insert: {
          created?: string
          division_id?: number
          division_level: number
          division_name: string
          updated?: string | null
        }
        Update: {
          created?: string
          division_id?: number
          division_level?: number
          division_name?: string
          updated?: string | null
        }
      }
      gen_config: {
        Row: {
          created: string | null
          gen_id: number
          gen_key: string
          gen_value: Json
          updated: string | null
        }
        Insert: {
          created?: string | null
          gen_id?: number
          gen_key: string
          gen_value: Json
          updated?: string | null
        }
        Update: {
          created?: string | null
          gen_id?: number
          gen_key?: string
          gen_value?: Json
          updated?: string | null
        }
      }
      group: {
        Row: {
          created: string
          description: string
          division_id: number | null
          group_id: number
          group_name: string
          updated: string | null
        }
        Insert: {
          created?: string
          description: string
          division_id?: number | null
          group_id?: number
          group_name: string
          updated?: string | null
        }
        Update: {
          created?: string
          description?: string
          division_id?: number | null
          group_id?: number
          group_name?: string
          updated?: string | null
        }
      }
      guest_user: {
        Row: {
          area_id: string
          created: string
          firstname: string
          guest_user_address: string
          guest_user_email: string
          guest_user_id: number
          guest_user_phone: string
          guest_user_zip: string
          lastname: string | null
          updated: string | null
        }
        Insert: {
          area_id: string
          created?: string
          firstname: string
          guest_user_address: string
          guest_user_email: string
          guest_user_id?: number
          guest_user_phone: string
          guest_user_zip: string
          lastname?: string | null
          updated?: string | null
        }
        Update: {
          area_id?: string
          created?: string
          firstname?: string
          guest_user_address?: string
          guest_user_email?: string
          guest_user_id?: number
          guest_user_phone?: string
          guest_user_zip?: string
          lastname?: string | null
          updated?: string | null
        }
      }
      item: {
        Row: {
          brand_id: number | null
          created: string
          is_active: boolean
          is_available_credit: boolean
          is_displayed: boolean
          item_cat3_jenis_id: number
          item_code: string
          item_desc_keyword: string | null
          item_desc_long: string | null
          item_desc_short: string | null
          item_id: number
          item_name: string
          item_slug: string | null
          max_thres: number
          min_thres: number
          unit_id: number
          updated: string | null
        }
        Insert: {
          brand_id?: number | null
          created?: string
          is_active?: boolean
          is_available_credit?: boolean
          is_displayed?: boolean
          item_cat3_jenis_id: number
          item_code: string
          item_desc_keyword?: string | null
          item_desc_long?: string | null
          item_desc_short?: string | null
          item_id?: number
          item_name: string
          item_slug?: string | null
          max_thres?: number
          min_thres?: number
          unit_id: number
          updated?: string | null
        }
        Update: {
          brand_id?: number | null
          created?: string
          is_active?: boolean
          is_available_credit?: boolean
          is_displayed?: boolean
          item_cat3_jenis_id?: number
          item_code?: string
          item_desc_keyword?: string | null
          item_desc_long?: string | null
          item_desc_short?: string | null
          item_id?: number
          item_name?: string
          item_slug?: string | null
          max_thres?: number
          min_thres?: number
          unit_id?: number
          updated?: string | null
        }
      }
      item_cat0_industry: {
        Row: {
          created: string
          item_cat0_industry_code: string
          item_cat0_industry_id: number
          item_cat0_industry_img: string | null
          item_cat0_industry_img_banner: string | null
          item_cat0_industry_img_menu: string | null
          item_cat0_industry_img_mobile: string | null
          item_cat0_industry_img_pack: string | null
          item_cat0_industry_name: string
          item_cat0_industry_slug: string | null
          item_cat0_industry_status: number
          updated: string | null
        }
        Insert: {
          created?: string
          item_cat0_industry_code: string
          item_cat0_industry_id?: number
          item_cat0_industry_img?: string | null
          item_cat0_industry_img_banner?: string | null
          item_cat0_industry_img_menu?: string | null
          item_cat0_industry_img_mobile?: string | null
          item_cat0_industry_img_pack?: string | null
          item_cat0_industry_name: string
          item_cat0_industry_slug?: string | null
          item_cat0_industry_status: number
          updated?: string | null
        }
        Update: {
          created?: string
          item_cat0_industry_code?: string
          item_cat0_industry_id?: number
          item_cat0_industry_img?: string | null
          item_cat0_industry_img_banner?: string | null
          item_cat0_industry_img_menu?: string | null
          item_cat0_industry_img_mobile?: string | null
          item_cat0_industry_img_pack?: string | null
          item_cat0_industry_name?: string
          item_cat0_industry_slug?: string | null
          item_cat0_industry_status?: number
          updated?: string | null
        }
      }
      item_cat1_kategori: {
        Row: {
          created: string
          item_cat0_industry_id: number
          item_cat1_kategori_code: string
          item_cat1_kategori_id: number
          item_cat1_kategori_name: string
          item_cat1_kategori_slug: string | null
          item_cat1_kategori_status: number
          updated: string | null
        }
        Insert: {
          created?: string
          item_cat0_industry_id: number
          item_cat1_kategori_code: string
          item_cat1_kategori_id?: number
          item_cat1_kategori_name: string
          item_cat1_kategori_slug?: string | null
          item_cat1_kategori_status: number
          updated?: string | null
        }
        Update: {
          created?: string
          item_cat0_industry_id?: number
          item_cat1_kategori_code?: string
          item_cat1_kategori_id?: number
          item_cat1_kategori_name?: string
          item_cat1_kategori_slug?: string | null
          item_cat1_kategori_status?: number
          updated?: string | null
        }
      }
      item_cat2_subkategori: {
        Row: {
          created: string
          item_cat1_kategori_id: number
          item_cat2_subkategori_code: string
          item_cat2_subkategori_id: number
          item_cat2_subkategori_name: string
          item_cat2_subkategori_slug: string | null
          item_cat2_subkategori_status: number
          updated: string | null
        }
        Insert: {
          created?: string
          item_cat1_kategori_id: number
          item_cat2_subkategori_code: string
          item_cat2_subkategori_id?: number
          item_cat2_subkategori_name: string
          item_cat2_subkategori_slug?: string | null
          item_cat2_subkategori_status: number
          updated?: string | null
        }
        Update: {
          created?: string
          item_cat1_kategori_id?: number
          item_cat2_subkategori_code?: string
          item_cat2_subkategori_id?: number
          item_cat2_subkategori_name?: string
          item_cat2_subkategori_slug?: string | null
          item_cat2_subkategori_status?: number
          updated?: string | null
        }
      }
      item_cat3_jenis: {
        Row: {
          created: string
          item_cat2_subkategori_id: number
          item_cat3_jenis_code: string
          item_cat3_jenis_id: number
          item_cat3_jenis_name: string
          item_cat3_jenis_slug: string | null
          item_cat3_jenis_status: number
          updated: string | null
        }
        Insert: {
          created?: string
          item_cat2_subkategori_id: number
          item_cat3_jenis_code: string
          item_cat3_jenis_id?: number
          item_cat3_jenis_name: string
          item_cat3_jenis_slug?: string | null
          item_cat3_jenis_status: number
          updated?: string | null
        }
        Update: {
          created?: string
          item_cat2_subkategori_id?: number
          item_cat3_jenis_code?: string
          item_cat3_jenis_id?: number
          item_cat3_jenis_name?: string
          item_cat3_jenis_slug?: string | null
          item_cat3_jenis_status?: number
          updated?: string | null
        }
      }
      item_dump: {
        Row: {
          brand_id: number | null
          item_cat3_jenis_id: number
          item_code: string
          item_desc_keyword: string | null
          item_desc_long: string | null
          item_desc_short: string | null
          item_id: number
          item_name: string
          item_slug: string | null
          unit_id: number
        }
        Insert: {
          brand_id?: number | null
          item_cat3_jenis_id: number
          item_code: string
          item_desc_keyword?: string | null
          item_desc_long?: string | null
          item_desc_short?: string | null
          item_id: number
          item_name: string
          item_slug?: string | null
          unit_id: number
        }
        Update: {
          brand_id?: number | null
          item_cat3_jenis_id?: number
          item_code?: string
          item_desc_keyword?: string | null
          item_desc_long?: string | null
          item_desc_short?: string | null
          item_id?: number
          item_name?: string
          item_slug?: string | null
          unit_id?: number
        }
      }
      item_image: {
        Row: {
          created: string | null
          is_main: boolean
          item_id: number
          item_image_id: number
          item_image_path: string
          updated: string | null
        }
        Insert: {
          created?: string | null
          is_main?: boolean
          item_id: number
          item_image_id?: number
          item_image_path: string
          updated?: string | null
        }
        Update: {
          created?: string | null
          is_main?: boolean
          item_id?: number
          item_image_id?: number
          item_image_path?: string
          updated?: string | null
        }
      }
      item_specification: {
        Row: {
          created: string
          item_id: number
          item_specification_id: number
          item_specification_value: string
          specification_id: number
          updated: string
        }
        Insert: {
          created?: string
          item_id: number
          item_specification_id?: number
          item_specification_value: string
          specification_id: number
          updated: string
        }
        Update: {
          created?: string
          item_id?: number
          item_specification_id?: number
          item_specification_value?: string
          specification_id?: number
          updated?: string
        }
      }
      kios: {
        Row: {
          area_id: string
          created: string
          kios_address: string
          kios_code: string | null
          kios_desc: string | null
          kios_email: string
          kios_enddate: string | null
          kios_id: number
          kios_img_path: Json | null
          kios_industry: Json | null
          kios_ktp_number: string
          kios_ktp_path: string | null
          kios_name: string
          kios_npwp: string
          kios_npwp_path: string | null
          kios_phone: string
          kios_pic: string | null
          kios_regdate: string
          kios_startdate: string | null
          kios_status: Database["public"]["Enums"]["kios_status"]
          kios_type: Database["public"]["Enums"]["kios_type"]
          kios_user_id: number
          kios_zip: string
          updated: string | null
        }
        Insert: {
          area_id: string
          created?: string
          kios_address: string
          kios_code?: string | null
          kios_desc?: string | null
          kios_email: string
          kios_enddate?: string | null
          kios_id?: number
          kios_img_path?: Json | null
          kios_industry?: Json | null
          kios_ktp_number: string
          kios_ktp_path?: string | null
          kios_name: string
          kios_npwp: string
          kios_npwp_path?: string | null
          kios_phone: string
          kios_pic?: string | null
          kios_regdate: string
          kios_startdate?: string | null
          kios_status?: Database["public"]["Enums"]["kios_status"]
          kios_type: Database["public"]["Enums"]["kios_type"]
          kios_user_id: number
          kios_zip: string
          updated?: string | null
        }
        Update: {
          area_id?: string
          created?: string
          kios_address?: string
          kios_code?: string | null
          kios_desc?: string | null
          kios_email?: string
          kios_enddate?: string | null
          kios_id?: number
          kios_img_path?: Json | null
          kios_industry?: Json | null
          kios_ktp_number?: string
          kios_ktp_path?: string | null
          kios_name?: string
          kios_npwp?: string
          kios_npwp_path?: string | null
          kios_phone?: string
          kios_pic?: string | null
          kios_regdate?: string
          kios_startdate?: string | null
          kios_status?: Database["public"]["Enums"]["kios_status"]
          kios_type?: Database["public"]["Enums"]["kios_type"]
          kios_user_id?: number
          kios_zip?: string
          updated?: string | null
        }
      }
      kios_akses: {
        Row: {
          created: string
          kios_akses_id: number
          kios_id: number
          kios_user_id: number
          updated: string | null
        }
        Insert: {
          created?: string
          kios_akses_id?: number
          kios_id: number
          kios_user_id: number
          updated?: string | null
        }
        Update: {
          created?: string
          kios_akses_id?: number
          kios_id?: number
          kios_user_id?: number
          updated?: string | null
        }
      }
      kios_user: {
        Row: {
          created: string
          firstname: string
          hashed_username: string | null
          is_active: boolean
          is_admin: boolean
          kios_user_id: number
          kios_user_type: Database["public"]["Enums"]["user_type"]
          lastname: string | null
          password: string
          updated: string | null
          username: string
        }
        Insert: {
          created?: string
          firstname: string
          hashed_username?: string | null
          is_active: boolean
          is_admin: boolean
          kios_user_id?: number
          kios_user_type?: Database["public"]["Enums"]["user_type"]
          lastname?: string | null
          password: string
          updated?: string | null
          username: string
        }
        Update: {
          created?: string
          firstname?: string
          hashed_username?: string | null
          is_active?: boolean
          is_admin?: boolean
          kios_user_id?: number
          kios_user_type?: Database["public"]["Enums"]["user_type"]
          lastname?: string | null
          password?: string
          updated?: string | null
          username?: string
        }
      }
      kurir: {
        Row: {
          created: string
          is_thirdparty: boolean
          kurir_id: number
          kurir_name: string
          updated: string | null
        }
        Insert: {
          created?: string
          is_thirdparty: boolean
          kurir_id?: number
          kurir_name: string
          updated?: string | null
        }
        Update: {
          created?: string
          is_thirdparty?: boolean
          kurir_id?: number
          kurir_name?: string
          updated?: string | null
        }
      }
      member: {
        Row: {
          area_id: string
          created: string
          is_active: boolean
          job_id: number | null
          kios_id: number
          member_address: string
          member_birthday: string | null
          member_code: string
          member_email: string | null
          member_enddate: string | null
          member_endreason_id: number | null
          member_feed: number | null
          member_firstname: string
          member_foto_path: string | null
          member_id: number
          member_income: number | null
          member_joindate: string
          member_ktp_path: string | null
          member_lastname: string | null
          member_nik: string
          member_phone: string | null
          member_zip: string | null
          status_kawin: Database["public"]["Enums"]["status_kawin"] | null
          updated: string | null
        }
        Insert: {
          area_id: string
          created?: string
          is_active: boolean
          job_id?: number | null
          kios_id: number
          member_address: string
          member_birthday?: string | null
          member_code: string
          member_email?: string | null
          member_enddate?: string | null
          member_endreason_id?: number | null
          member_feed?: number | null
          member_firstname: string
          member_foto_path?: string | null
          member_id?: number
          member_income?: number | null
          member_joindate: string
          member_ktp_path?: string | null
          member_lastname?: string | null
          member_nik: string
          member_phone?: string | null
          member_zip?: string | null
          status_kawin?: Database["public"]["Enums"]["status_kawin"] | null
          updated?: string | null
        }
        Update: {
          area_id?: string
          created?: string
          is_active?: boolean
          job_id?: number | null
          kios_id?: number
          member_address?: string
          member_birthday?: string | null
          member_code?: string
          member_email?: string | null
          member_enddate?: string | null
          member_endreason_id?: number | null
          member_feed?: number | null
          member_firstname?: string
          member_foto_path?: string | null
          member_id?: number
          member_income?: number | null
          member_joindate?: string
          member_ktp_path?: string | null
          member_lastname?: string | null
          member_nik?: string
          member_phone?: string | null
          member_zip?: string | null
          status_kawin?: Database["public"]["Enums"]["status_kawin"] | null
          updated?: string | null
        }
      }
      member_endreason: {
        Row: {
          created: string
          member_endreason_desc: string
          member_endreason_id: number
          updated: string | null
        }
        Insert: {
          created?: string
          member_endreason_desc: string
          member_endreason_id?: number
          updated?: string | null
        }
        Update: {
          created?: string
          member_endreason_desc?: string
          member_endreason_id?: number
          updated?: string | null
        }
      }
      modul: {
        Row: {
          created: string | null
          modul_group_id: number
          modul_id: number
          modul_name: string
          modul_status: Database["public"]["Enums"]["modul_status"]
          modul_url: string
          updated: string | null
        }
        Insert: {
          created?: string | null
          modul_group_id: number
          modul_id?: number
          modul_name: string
          modul_status?: Database["public"]["Enums"]["modul_status"]
          modul_url: string
          updated?: string | null
        }
        Update: {
          created?: string | null
          modul_group_id?: number
          modul_id?: number
          modul_name?: string
          modul_status?: Database["public"]["Enums"]["modul_status"]
          modul_url?: string
          updated?: string | null
        }
      }
      modul_group: {
        Row: {
          created: string | null
          modul_group_id: number
          modul_group_name: string
          updated: string | null
        }
        Insert: {
          created?: string | null
          modul_group_id?: number
          modul_group_name: string
          updated?: string | null
        }
        Update: {
          created?: string | null
          modul_group_id?: number
          modul_group_name?: string
          updated?: string | null
        }
      }
      permission: {
        Row: {
          act_create: boolean
          act_delete: boolean
          act_update: boolean
          act_view: boolean
          created: string
          group_id: number
          modul_id: number
          permission_id: number
          updated: string | null
        }
        Insert: {
          act_create: boolean
          act_delete: boolean
          act_update: boolean
          act_view: boolean
          created?: string
          group_id: number
          modul_id: number
          permission_id?: number
          updated?: string | null
        }
        Update: {
          act_create?: boolean
          act_delete?: boolean
          act_update?: boolean
          act_view?: boolean
          created?: string
          group_id?: number
          modul_id?: number
          permission_id?: number
          updated?: string | null
        }
      }
      price_master: {
        Row: {
          based: number
          created: string
          discount: number
          item_id: number
          min_qty: number
          price_master_id: number
          updated: string | null
          vatout: number
        }
        Insert: {
          based: number
          created?: string
          discount?: number
          item_id: number
          min_qty: number
          price_master_id?: number
          updated?: string | null
          vatout: number
        }
        Update: {
          based?: number
          created?: string
          discount?: number
          item_id?: number
          min_qty?: number
          price_master_id?: number
          updated?: string | null
          vatout?: number
        }
      }
      price_retail: {
        Row: {
          based: number
          created: string
          discount: number
          item_id: number
          min_qty: number
          price_retail_id: number
          updated: string | null
          vatout: number
        }
        Insert: {
          based: number
          created?: string
          discount?: number
          item_id: number
          min_qty: number
          price_retail_id?: number
          updated?: string | null
          vatout: number
        }
        Update: {
          based?: number
          created?: string
          discount?: number
          item_id?: number
          min_qty?: number
          price_retail_id?: number
          updated?: string | null
          vatout?: number
        }
      }
      ref_job: {
        Row: {
          created: string
          job_id: number
          job_name: string
          updated: string | null
        }
        Insert: {
          created?: string
          job_id?: number
          job_name: string
          updated?: string | null
        }
        Update: {
          created?: string
          job_id?: number
          job_name?: string
          updated?: string | null
        }
      }
      ref_penghasilan: {
        Row: {
          created: string
          maksimum: number
          minimum: number
          ref_penghasilan_id: number
          updated: string | null
        }
        Insert: {
          created?: string
          maksimum: number
          minimum: number
          ref_penghasilan_id?: number
          updated?: string | null
        }
        Update: {
          created?: string
          maksimum?: number
          minimum?: number
          ref_penghasilan_id?: number
          updated?: string | null
        }
      }
      rental: {
        Row: {
          area_id: string
          created: string
          rental_address: string
          rental_email: string
          rental_id: number
          rental_name: string
          rental_npwp: string
          rental_phone: string
          rental_pic: string
          rental_zip: string
          updated: string | null
        }
        Insert: {
          area_id: string
          created?: string
          rental_address: string
          rental_email: string
          rental_id?: number
          rental_name: string
          rental_npwp: string
          rental_phone: string
          rental_pic: string
          rental_zip: string
          updated?: string | null
        }
        Update: {
          area_id?: string
          created?: string
          rental_address?: string
          rental_email?: string
          rental_id?: number
          rental_name?: string
          rental_npwp?: string
          rental_phone?: string
          rental_pic?: string
          rental_zip?: string
          updated?: string | null
        }
      }
      specification: {
        Row: {
          created: string
          specification_code: string
          specification_id: number
          specification_name: string
          updated: string | null
        }
        Insert: {
          created?: string
          specification_code: string
          specification_id?: number
          specification_name: string
          updated?: string | null
        }
        Update: {
          created?: string
          specification_code?: string
          specification_id?: number
          specification_name?: string
          updated?: string | null
        }
      }
      supplier: {
        Row: {
          area_id: string
          created: string
          supplier_address: string
          supplier_email: string
          supplier_id: number
          supplier_name: string
          supplier_npwp: string
          supplier_phone: string
          supplier_pic: string
          supplier_zip: string
          updated: string | null
        }
        Insert: {
          area_id: string
          created?: string
          supplier_address: string
          supplier_email: string
          supplier_id?: number
          supplier_name: string
          supplier_npwp: string
          supplier_phone: string
          supplier_pic: string
          supplier_zip: string
          updated?: string | null
        }
        Update: {
          area_id?: string
          created?: string
          supplier_address?: string
          supplier_email?: string
          supplier_id?: number
          supplier_name?: string
          supplier_npwp?: string
          supplier_phone?: string
          supplier_pic?: string
          supplier_zip?: string
          updated?: string | null
        }
      }
      unit: {
        Row: {
          created: string
          unit_category_id: number | null
          unit_id: number
          unit_name: string
          unit_symbol: string
          updated: string | null
        }
        Insert: {
          created?: string
          unit_category_id?: number | null
          unit_id?: number
          unit_name: string
          unit_symbol: string
          updated?: string | null
        }
        Update: {
          created?: string
          unit_category_id?: number | null
          unit_id?: number
          unit_name?: string
          unit_symbol?: string
          updated?: string | null
        }
      }
      unit_category: {
        Row: {
          created: string
          unit_category_id: number
          unit_category_name: string
          updated: string | null
        }
        Insert: {
          created?: string
          unit_category_id?: number
          unit_category_name: string
          updated?: string | null
        }
        Update: {
          created?: string
          unit_category_id?: number
          unit_category_name?: string
          updated?: string | null
        }
      }
      user: {
        Row: {
          created: string | null
          firstname: string
          group_id: number
          is_active: boolean
          lastname: string | null
          password: string
          updated: string | null
          user_id: number
          username: string
        }
        Insert: {
          created?: string | null
          firstname: string
          group_id: number
          is_active: boolean
          lastname?: string | null
          password: string
          updated?: string | null
          user_id?: number
          username: string
        }
        Update: {
          created?: string | null
          firstname?: string
          group_id?: number
          is_active?: boolean
          lastname?: string | null
          password?: string
          updated?: string | null
          user_id?: number
          username?: string
        }
      }
      warehouse_master: {
        Row: {
          created: string
          is_otw: boolean
          updated: string | null
          warehouse_master_address: string
          warehouse_master_id: number
          warehouse_master_name: string
        }
        Insert: {
          created?: string
          is_otw: boolean
          updated?: string | null
          warehouse_master_address: string
          warehouse_master_id?: number
          warehouse_master_name: string
        }
        Update: {
          created?: string
          is_otw?: boolean
          updated?: string | null
          warehouse_master_address?: string
          warehouse_master_id?: number
          warehouse_master_name?: string
        }
      }
      warehouse_retail: {
        Row: {
          created: string
          is_rent: boolean
          kios_id: number
          updated: string | null
          warehouse_retail_address: string
          warehouse_retail_id: number
          warehouse_retail_name: string
          warehouse_third_id: number | null
        }
        Insert: {
          created?: string
          is_rent: boolean
          kios_id: number
          updated?: string | null
          warehouse_retail_address: string
          warehouse_retail_id?: number
          warehouse_retail_name: string
          warehouse_third_id?: number | null
        }
        Update: {
          created?: string
          is_rent?: boolean
          kios_id?: number
          updated?: string | null
          warehouse_retail_address?: string
          warehouse_retail_id?: number
          warehouse_retail_name?: string
          warehouse_third_id?: number | null
        }
      }
      warehouse_third: {
        Row: {
          created: string
          rental_id: number
          updated: string | null
          warehouse_third_address: string
          warehouse_third_id: number
          warehouse_third_name: string
        }
        Insert: {
          created?: string
          rental_id: number
          updated?: string | null
          warehouse_third_address: string
          warehouse_third_id?: number
          warehouse_third_name: string
        }
        Update: {
          created?: string
          rental_id?: number
          updated?: string | null
          warehouse_third_address?: string
          warehouse_third_id?: number
          warehouse_third_name?: string
        }
      }
    }
    Views: {
      v_area: {
        Row: {
          area_id: string | null
          area_level: number | null
          area_name: string | null
          area_parent_id: string | null
          country_code: string | null
          id_kecamatan: string | null
          id_kota: string | null
          id_propinsi: string | null
          kecamatan: string | null
          kota: string | null
          negara: string | null
          propinsi: string | null
        }
      }
      v_item: {
        Row: {
          arr_price_master: string[] | null
          arr_price_retail: string[] | null
          brand_id: number | null
          brand_name: string | null
          created: string | null
          is_active: boolean | null
          is_available_credit: boolean | null
          is_displayed: boolean | null
          item_cat0_industry_code: string | null
          item_cat0_industry_id: number | null
          item_cat0_industry_name: string | null
          item_cat1_kategori_code: string | null
          item_cat1_kategori_id: number | null
          item_cat1_kategori_name: string | null
          item_cat2_subkategori_code: string | null
          item_cat2_subkategori_id: number | null
          item_cat2_subkategori_name: string | null
          item_cat3_jenis_code: string | null
          item_cat3_jenis_id: number | null
          item_cat3_jenis_name: string | null
          item_code: string | null
          item_desc_keyword: string | null
          item_desc_long: string | null
          item_desc_short: string | null
          item_id: number | null
          item_image_path: string[] | null
          item_name: string | null
          item_slug: string | null
          main_item_image_path: string[] | null
          main_price_master: number | null
          main_price_retail: number | null
          max_thres: number | null
          min_thres: number | null
          price_after_discount_master: number | null
          price_after_discount_retail: number | null
          unit_id: number | null
          unit_name: string | null
          unit_symbol: string | null
          updated: string | null
        }
      }
      v_item_detil_mobile: {
        Row: {
          arr_specification: string[] | null
          brand_id: number | null
          brand_name: string | null
          is_available_credit: boolean | null
          item_cat0_industry_id: number | null
          item_cat1_kategori_id: number | null
          item_cat2_subkategori_id: number | null
          item_cat3_jenis_id: number | null
          item_code: string | null
          item_desc_long: string | null
          item_desc_short: string | null
          item_id: number | null
          item_name: string | null
          main_item_image_path: string[] | null
          main_price_master: number | null
          main_price_retail: number | null
          price_after_discount_master: number | null
          price_after_discount_retail: number | null
          unit_id: number | null
          unit_name: string | null
        }
      }
      v_item_mobile: {
        Row: {
          created: string | null
          is_available_credit: boolean | null
          item_cat0_industry_id: number | null
          item_cat1_kategori_id: number | null
          item_cat2_subkategori_id: number | null
          item_cat3_jenis_id: number | null
          item_code: string | null
          item_id: number | null
          item_name: string | null
          main_item_image_path: string[] | null
          main_price_master: number | null
          main_price_retail: number | null
          price_after_discount_master: number | null
          price_after_discount_retail: number | null
          unit_id: number | null
          updated: string | null
        }
      }
      v_kios: {
        Row: {
          area_id: string | null
          arr_kios_akses: Json | null
          created: string | null
          firstname_owner: string | null
          is_active_owner: boolean | null
          is_admin_owner: boolean | null
          kios_address: string | null
          kios_code: string | null
          kios_desc: string | null
          kios_email: string | null
          kios_enddate: string | null
          kios_id: number | null
          kios_img_path: Json | null
          kios_industry: Json | null
          kios_industry_name: string[] | null
          kios_ktp_number: string | null
          kios_ktp_path: string | null
          kios_name: string | null
          kios_npwp: string | null
          kios_npwp_path: string | null
          kios_phone: string | null
          kios_pic: string | null
          kios_regdate: string | null
          kios_startdate: string | null
          kios_status: Database["public"]["Enums"]["kios_status"] | null
          kios_type: Database["public"]["Enums"]["kios_type"] | null
          kios_user_id: number | null
          kios_user_type_owner: Database["public"]["Enums"]["user_type"] | null
          kios_zip: string | null
          lastname_owner: string | null
          password_owner: string | null
          updated: string | null
          username_owner: string | null
        }
      }
      v_kios_owner_admin: {
        Row: {
          arr_kios_owned: Json | null
          created: string | null
          firstname: string | null
          is_active: boolean | null
          is_admin: boolean | null
          kios_user_id: number | null
          kios_user_type: Database["public"]["Enums"]["user_type"] | null
          lastname: string | null
          password: string | null
          updated: string | null
          username: string | null
        }
      }
      v_kios_owner_mobile: {
        Row: {
          arr_kios_owned: Json | null
          created: string | null
          firstname: string | null
          is_active: boolean | null
          is_admin: boolean | null
          kios_user_id: number | null
          kios_user_type: Database["public"]["Enums"]["user_type"] | null
          lastname: string | null
          password: string | null
          updated: string | null
          username: string | null
        }
      }
      v_tree_menu: {
        Row: {
          item_cat0_industry_id: number | null
          item_cat0_industry_name: string | null
          item_cat0_industry_slug: string | null
          item_cat0_industry_status: number | null
          item_cat1_kategori_id: number | null
          item_cat1_kategori_name: string | null
          item_cat1_kategori_slug: string | null
          item_cat1_kategori_status: number | null
          item_cat2_subkategori_id: number | null
          item_cat2_subkategori_name: string | null
          item_cat2_subkategori_slug: string | null
          item_cat2_subkategori_status: number | null
          item_cat3_jenis_id: number | null
          item_cat3_jenis_name: string | null
          item_cat3_jenis_slug: string | null
          item_cat3_jenis_status: number | null
        }
      }
    }
    Functions: {
      f_tree_cat: {
        Args: Record<PropertyKey, never>
        Returns: Record<string, unknown>[]
      }
      system_rows: {
        Args: { "": unknown }
        Returns: unknown
      }
    }
    Enums: {
      cash_type: "KAS" | "BANK" | "ELEKTRONIK"
      customer_payment_type: "TRANSFER"
      kios_status: "VERIFIED" | "UNVERIFIED"
      kios_type: "KIOS" | "BUMDES" | "KOPERASI"
      master_payment_type: "TUNAI/TRANSFER" | "KREDIT"
      modul_status: "dev" | "prod"
      retail_payment_type: "TUNAI/TRANSFER" | "SEBAGIAN BAYAR" | "KUR"
      status_kawin: "BELUM MENIKAH" | "MENIKAH" | "DUDA/JANDA"
      user_type: "UMUM" | "KIOS" | "UNREGISTERED"
    }
  }
}
