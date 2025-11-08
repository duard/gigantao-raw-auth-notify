import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TwfeleEntity } from './tWFELE.entity';

@Index('PK_TWFFORM', ['nuform'], { unique: true })
@Index('UQ__TWFFORM__138740B134652035', ['nuform'], { unique: true })
@Entity('TWFFORM', { schema: 'SANKHYA' })
export class TwfformEntity {
  @Column('int', { primary: true, name: 'NUFORM' })
  nuform: number;

  @Column('varchar', { name: 'NOMEINSTANCIA', length: 30 })
  nomeinstancia: string;

  @Column('varchar', { name: 'CARDINALIDADE', length: 1 })
  cardinalidade: string;

  @Column('varchar', { name: 'ESCOPO', length: 1, default: () => "'T'" })
  escopo: string;

  @Column('int', { name: 'ORDEM', nullable: true })
  ordem: number | null;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 30 })
  descricao: string | null;

  @Column('varchar', { name: 'POLITICAREETRANCIA', nullable: true, length: 1 })
  politicareetrancia: string | null;

  @Column('text', { name: 'CONFIGCAMPOS', nullable: true })
  configcampos: string | null;

  @Column('int', { name: 'NUFORMPAI', nullable: true })
  nuformpai: number | null;

  @Column('char', { name: 'UTILIZATAREFA', nullable: true, length: 1 })
  utilizatarefa: string | null;

  @Column('char', { name: 'SALVARDESTINO', nullable: true, length: 1 })
  salvardestino: string | null;

  @Column('char', { name: 'TIPO', nullable: true, length: 1 })
  tipo: string | null;

  @Column('varchar', { name: 'ORDEMABAS', nullable: true, length: 500 })
  ordemabas: string | null;

  @Column('varchar', { name: 'SALVARFINALPROCESSO', nullable: true, length: 1 })
  salvarfinalprocesso: string | null;

  @ManyToOne(() => TwfeleEntity, (twfeleEntity) => twfeleEntity.twfforms)
  @JoinColumn([{ name: 'NUELE', referencedColumnName: 'nuele' }])
  nuele: TwfeleEntity;
}
