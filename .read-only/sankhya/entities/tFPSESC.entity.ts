import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPSESC', ['codemp', 'dtref', 'tpamb', 'seq'], { unique: true })
@Entity('TFPSESC', { schema: 'SANKHYA' })
export class TfpsescEntity {
  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('char', { primary: true, name: 'TPAMB', length: 1 })
  tpamb: string;

  @Column('smallint', { primary: true, name: 'SEQ' })
  seq: number;

  @Column('smallint', { name: 'SEQATUAL', nullable: true })
  seqatual: number | null;

  @Column('char', { name: 'OPERACAO', nullable: true, length: 1 })
  operacao: string | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('char', { name: 'TPFECHAMENTO', nullable: true, length: 1 })
  tpfechamento: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpsescs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
