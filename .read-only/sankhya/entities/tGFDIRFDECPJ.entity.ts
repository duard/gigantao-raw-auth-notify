import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfempEntity } from './tGFEMP.entity';

@Index('PK_TGFDIRFDECPJ', ['codemp', 'dtinicial', 'dtfinal', 'reg'], {
  unique: true,
})
@Entity('TGFDIRFDECPJ', { schema: 'SANKHYA' })
export class TgfdirfdecpjEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTINICIAL' })
  dtinicial: Date;

  @Column('datetime', { primary: true, name: 'DTFINAL' })
  dtfinal: Date;

  @Column('varchar', {
    primary: true,
    name: 'REG',
    length: 5,
    default: () => "'DECPJ'",
  })
  reg: string;

  @Column('varchar', { name: 'CNPJ', nullable: true, length: 14 })
  cnpj: string | null;

  @Column('varchar', { name: 'NOME', nullable: true, length: 150 })
  nome: string | null;

  @Column('smallint', { name: 'NATDECL', nullable: true })
  natdecl: number | null;

  @Column('varchar', { name: 'CPFRESP', nullable: true, length: 11 })
  cpfresp: string | null;

  @Column('char', { name: 'INDSOCOST', length: 1, default: () => "'N'" })
  indsocost: string;

  @Column('char', { name: 'INDDEPDECJUD', length: 1, default: () => "'N'" })
  inddepdecjud: string;

  @Column('char', { name: 'INDDEPFUNINV', length: 1, default: () => "'N'" })
  inddepfuninv: string;

  @Column('char', { name: 'INDPGEXT', length: 1, default: () => "'N'" })
  indpgext: string;

  @Column('char', { name: 'INDPLPRIASS', length: 1, default: () => "'N'" })
  indplpriass: string;

  @Column('char', { name: 'INDENTIMUNE', length: 1, default: () => "'N'" })
  indentimune: string;

  @Column('char', { name: 'INDPGFUNDPUB', length: 1, default: () => "'N'" })
  indpgfundpub: string;

  @Column('char', { name: 'INDSITESP', length: 1, default: () => "'N'" })
  indsitesp: string;

  @Column('datetime', { name: 'DTEVENTO', nullable: true })
  dtevento: Date | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfdirfdecpjs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}
