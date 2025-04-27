import { StaticImageData } from "next/image";
import Abdullah from "@/assets/contributors/mentors/abdullah.png";
import AbdullahTalayahan from "@/assets/contributors/mentors/abdukkah_talyahan.png";
import AdnanDeniz from "@/assets/contributors/mentors/adnan_deniz.png";
import RamazanAgirtas from "@/assets/contributors/mentors/ramazan.png";
import AlicanAlasik from "@/assets/contributors/mentors/alican_alasik.png";
import BilginKocak from "@/assets/contributors/mentors/bilgin_kocak.png";
import ErayKocak from "@/assets/contributors/mentors/eray_kocak.png";
import ErhanTezcan from "@/assets/contributors/mentors/erhan_tezcan.png";
import Errol from "@/assets/contributors/mentors/errol.png";
import FuraknAkal from "@/assets/contributors/mentors/furkan_akal.png";
import Junger from "@/assets/contributors/mentors/junger.png";
import KaanUzadogan from "@/assets/contributors/mentors/kaan_uzadogan.png";
import MehmetGonen from "@/assets/contributors/mentors/mehmet_gonen.png";
import MuahmmetTanrikulu from "@/assets/contributors/mentors/muhammet_tanikulu.png";
import MustafaKircali from "@/assets/contributors/mentors/mustafa_kircali.png";
import OguzYayla from "@/assets/contributors/mentors/oguz_yayla.png";
import OmerYanar from "@/assets/contributors/mentors/omer_yanar.png";
import OrkunKulce from "@/assets/contributors/mentors/orkun_kulce.png";
import UgurSen from "@/assets/contributors/mentors/ugur_sen.png";
import YamanCan from "@/assets/contributors/mentors/yaman_can.png";
import YigitKilicoglu from "@/assets/contributors/mentors/yigit_kilicoglu.png";
import YunusGurlek from "@/assets/contributors/mentors/yunus_gurlek.png";
import IsaSertkaya from "@/assets/contributors/mentors/isa_sertkaya.png";

interface Mentors {
  name: string;
  company: string;
  image: string | StaticImageData;
  type: "Mentors";
}

const mentors: Mentors[] = [
  {
    name: "Abdullah Eryuzlu",
    company: "UnionLabs",
    image: Abdullah,
    type: "Mentors",
  },
  {
    name: "Abdullah Talayhan",
    company: "EPFL",
    image: AbdullahTalayahan,
    type: "Mentors",
  },
  {
    name: "Adnan Deniz Çorlu",
    company: "Omniflx",
    image: AdnanDeniz,
    type: "Mentors",
  },
  {
    name: "A. Ramazan Ağırtaş",
    company: "Nethermind",
    image: RamazanAgirtas,
    type: "Mentors",
  },
  {
    name: "Alican Alaşık",
    company: "Crypto Economics Expert",
    image: AlicanAlasik,
    type: "Mentors",
  },
  {
    name: "Bilgin Koçak",
    company: "Nethermind",
    image: BilginKocak,
    type: "Mentors",
  },
  {
    name: "Eray Koçak",
    company: "DeFi Expert",
    image: ErayKocak,
    type: "Mentors",
  },
  {
    name: "Erhan Tezcan",
    company: "FirsthBatch",
    image: ErhanTezcan,
    type: "Mentors",
  },
  {
    name: "Errol Drummond",
    company: "Terminal 3 Labs",
    image: Errol,
    type: "Mentors",
  },
  {
    name: "Furkan Akal",
    company: "Inco Network",
    image: FuraknAkal,
    type: "Mentors",
  },
  {
    name: "jünger",
    company: "Taiko",
    image: Junger,
    type: "Mentors",
  },
  {
    name: "Kaan Uzadoğan",
    company: "Sourcify",
    image: KaanUzadogan,
    type: "Mentors",
  },
  {
    name: "Mehmet Gönen",
    company: "Cryptography Researcher",
    image: MehmetGonen,
    type: "Mentors",
  },
  {
    name: "Muhammet Tanrıkulu",
    company: "ENS",
    image: MuahmmetTanrikulu,
    type: "Mentors",
  },
  {
    name: "Mustafa Kırcalı",
    company: "Cryptography PhD ODTU",
    image: MustafaKircali,
    type: "Mentors",
  },
  {
    name: "Oğuz Yayla",
    company: "ODTU",
    image: OguzYayla,
    type: "Mentors",
  },
  {
    name: "Ömer Yanar",
    company: "Stable Summit",
    image: OmerYanar,
    type: "Mentors",
  },
  {
    name: "Orkun Külçe",
    company: "node101",
    image: OrkunKulce,
    type: "Mentors",
  },
  {
    name: "Uğur Şen",
    company: "Cryptography Researcher",
    image: UgurSen,
    type: "Mentors",
  },
  {
    name: "Yaman Can",
    company: "ModaPalas",
    image: YamanCan,
    type: "Mentors",
  },
  {
    name: "Yiğit Kılıçoğlu",
    company: "Yale Uni",
    image: YigitKilicoglu,
    type: "Mentors",
  },
  {
    name: "Yunus Gürlek",
    company: "Ceo node101",
    image: YunusGurlek,
    type: "Mentors",
  },
  {
    name: "İsa Sertkaya",
    company: "Silent Research Labs",
    image: IsaSertkaya,
    type: "Mentors",
  },
];

export default mentors;
