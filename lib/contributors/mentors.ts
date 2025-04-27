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
    company: "Co-Founder at UnionLabs",
    image: Abdullah,
    type: "Mentors",
  },
  {
    name: "Abdullah Talayhan",
    company: "PhD Student at EPFL",
    image: AbdullahTalayahan,
    type: "Mentors",
  },
  {
    name: "Adnan Deniz Çorlu",
    company: "Blockchain Dev, Omniflx",
    image: AdnanDeniz,
    type: "Mentors",
  },
  {
    name: "A. Ramazan Ağırtaş",
    company: "Researcher at Nethermind",
    image: RamazanAgirtas,
    type: "Mentors",
  },
  {
    name: "Alican Alaşık",
    company: "Alican Alaşık",
    image: AlicanAlasik,
    type: "Mentors",
  },
  {
    name: "Bilgin Koçak",
    company: "Researcher at Nethermind",
    image: BilginKocak,
    type: "Mentors",
  },
  {
    name: "Eray Koçak",
    company: "DeFi Expert - ex Reseracher The Graph",
    image: ErayKocak,
    type: "Mentors",
  },
  {
    name: "Erhan Tezcan",
    company: "Dev at FirsthBatch",
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
    company: "Researcher at Taiko",
    image: Junger,
    type: "Mentors",
  },
  {
    name: "Kaan Uzadoğan",
    company: "Blockchain Dev, Sourcify",
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
    company: "Blockchain Dev, ENS",
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
    company: "Head of ODTU Cryptography Depertment",
    image: OguzYayla,
    type: "Mentors",
  },
  {
    name: "Ömer Yanar",
    company: "DeFi Researcher, Stable Summit",
    image: OmerYanar,
    type: "Mentors",
  },
  {
    name: "Orkun Külçe",
    company: "Blockchain Dev, node101",
    image: OrkunKulce,
    type: "Mentors",
  },
  {
    name: "Uğur Şen",
    company: "Cryptography Researcher,",
    image: UgurSen,
    type: "Mentors",
  },
  {
    name: "Yaman Can",
    company: "UI & UX Expert, ModaPalas",
    image: YamanCan,
    type: "Mentors",
  },
  {
    name: "Yiğit Kılıçoğlu",
    company: "Cryptography Researcher, Yale Uni",
    image: YigitKilicoglu,
    type: "Mentors",
  },
  {
    name: "Yunus Gürlek",
    company: "Software Dev at Mina, Ceo node101",
    image: YunusGurlek,
    type: "Mentors",
  },
  {
    name: "İsa Sertkaya",
    company: "Co-Founder CTO at Silent Research Labs",
    image: IsaSertkaya,
    type: "Mentors",
  },
];

export default mentors;
