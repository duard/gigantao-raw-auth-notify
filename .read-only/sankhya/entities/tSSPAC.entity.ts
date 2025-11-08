import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TssitpEntity } from './tSSITP.entity';

@Index('PK_TSSPAC', ['nupac'], { unique: true })
@Entity('TSSPAC', { schema: 'SANKHYA' })
export class TsspacEntity {
  @Column('int', { primary: true, name: 'NUPAC' })
  nupac: number;

  @Column('datetime', { name: 'DHCAD' })
  dhcad: Date;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('varchar', { name: 'DESCRICAO', length: 3103 })
  descricao: string;

  @Column('varchar', { name: 'TITULO', length: 100 })
  titulo: string;

  @Column('image', { name: 'IMAGEM' })
  imagem: Buffer;

  @Column('int', { name: 'VERSAO' })
  versao: number;

  @Column('smallint', { name: 'BUILD' })
  build: number;

  @Column('varchar', { name: 'NOMEPAC', nullable: true, length: 25 })
  nomepac: string | null;

  @Column('char', { name: 'CATEGORIA', length: 1, default: () => "'S'" })
  categoria: string;

  @Column('float', { name: 'VALOR', precision: 53 })
  valor: number;

  @Column('int', { name: 'IMPORTANCIA' })
  importancia: number;

  @Column('float', { name: 'NOTA', precision: 53 })
  nota: number;

  @Column('int', { name: 'CODPARCAUTOR', default: () => '(0)' })
  codparcautor: number;

  @Column('image', { name: 'ARQUIVODOC', nullable: true })
  arquivodoc: Buffer | null;

  @Column('varchar', { name: 'NOMEARQUIVO', nullable: true, length: 255 })
  nomearquivo: string | null;

  @Column('varchar', { name: 'DESCRTECNICA', nullable: true, length: 3103 })
  descrtecnica: string | null;

  @Column('char', { name: 'TIPOBD', length: 1, default: () => "'A'" })
  tipobd: string;

  @Column('varchar', { name: 'TIPOPAC', length: 2, default: () => "'IN'" })
  tipopac: string;

  @Column('varchar', { name: 'TERMOUSO', nullable: true, length: 2 })
  termouso: string | null;

  @Column('char', { name: 'CRIPTOGRAFADO', nullable: true, length: 1 })
  criptografado: string | null;

  @Column('char', {
    name: 'GRATIS',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  gratis: string | null;

  @Column('float', { name: 'VLRPACOTE', nullable: true, precision: 53 })
  vlrpacote: number | null;

  @Column('char', { name: 'MODSPT', nullable: true, length: 1 })
  modspt: string | null;

  @Column('float', { name: 'VLRMENSAL', nullable: true, precision: 53 })
  vlrmensal: number | null;

  @Column('varchar', { name: 'CGC_CPF', nullable: true, length: 14 })
  cgcCpf: string | null;

  @Column('char', { name: 'EXCLUSIVA', length: 1, default: () => "'N'" })
  exclusiva: string;

  @Column('float', { name: 'VLRTRANSACAO', nullable: true, precision: 53 })
  vlrtransacao: number | null;

  @OneToMany(() => TssitpEntity, (tssitpEntity) => tssitpEntity.nupac2)
  tssitps: TssitpEntity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsspacs)
  @JoinColumn([{ name: 'CODUSUCAD', referencedColumnName: 'codusu' }])
  codusucad: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tsspacs2)
  @JoinColumn([{ name: 'CODUSUALTER', referencedColumnName: 'codusu' }])
  codusualter: TsiusuEntity;
}
