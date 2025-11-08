import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TsiirtEntity } from './tSIIRT.entity';
import { TssitpEntity } from './tSSITP.entity';

@Index('PK_TSIRET', ['codigo'], { unique: true })
@Entity('TSIRET', { schema: 'SANKHYA' })
export class TsiretEntity {
  @Column('int', { primary: true, name: 'CODIGO' })
  codigo: number;

  @Column('char', { name: 'TITULO', length: 40 })
  titulo: string;

  @Column('text', { name: 'SP_CHAMADA', nullable: true })
  spChamada: string | null;

  @Column('int', { name: 'CODPAI' })
  codpai: number;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('char', { name: 'ANALITICO', length: 1, default: () => "'S'" })
  analitico: string;

  @Column('smallint', { name: 'GRAU' })
  grau: number;

  @Column('char', { name: 'USASQLNUFIN', length: 1, default: () => "'N'" })
  usasqlnufin: string;

  @Column('char', { name: 'CONCEXTBANC', length: 1, default: () => "'N'" })
  concextbanc: string;

  @Column('char', { name: 'CONFIGTAXAADMIN', length: 1, default: () => "'G'" })
  configtaxaadmin: string;

  @OneToMany(() => TsiirtEntity, (tsiirtEntity) => tsiirtEntity.codigo2)
  tsiirts: TsiirtEntity[];

  @OneToMany(() => TssitpEntity, (tssitpEntity) => tssitpEntity.codret)
  tssitps: TssitpEntity[];
}
