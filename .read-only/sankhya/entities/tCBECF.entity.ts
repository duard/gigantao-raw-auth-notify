import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TcbecfcEntity } from './tCBECFC.entity';

@Index('PK_TCBECF', ['codemp', 'bloco', 'registro', 'codigo'], { unique: true })
@Entity('TCBECF', { schema: 'SANKHYA' })
export class TcbecfEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('varchar', { primary: true, name: 'BLOCO', length: 1 })
  bloco: string;

  @Column('smallint', { primary: true, name: 'REGISTRO' })
  registro: number;

  @Column('varchar', { primary: true, name: 'CODIGO', length: 10 })
  codigo: string;

  @Column('varchar', { name: 'TIPO', length: 1 })
  tipo: string;

  @Column('text', { name: 'CMDSQL', nullable: true })
  cmdsql: string | null;

  @Column('varchar', { name: 'ARQUIVO', length: 254 })
  arquivo: string;

  @Column('float', { name: 'VALOR', precision: 53 })
  valor: number;

  @Column('varchar', { name: 'PERMVLRZERADO', length: 1, default: () => "'N'" })
  permvlrzerado: string;

  @Column('varchar', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('varchar', { name: 'TABELA', nullable: true, length: 6 })
  tabela: string | null;

  @Column('varchar', { name: 'ARQUIVOSKW', nullable: true, length: 254 })
  arquivoskw: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcbecfs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => TcbecfcEntity, (tcbecfcEntity) => tcbecfcEntity.tcbecf)
  tcbecfcs: TcbecfcEntity[];
}
