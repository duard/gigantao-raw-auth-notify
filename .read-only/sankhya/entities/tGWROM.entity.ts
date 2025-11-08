import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGWROM', ['nuseparacao', 'codbarraconcat'], { unique: true })
@Entity('TGWROM', { schema: 'SANKHYA' })
export class TgwromEntity {
  @Column('int', { primary: true, name: 'NUSEPARACAO' })
  nuseparacao: number;

  @Column('varchar', { primary: true, name: 'CODBARRACONCAT', length: 50 })
  codbarraconcat: string;

  @Column('float', { name: 'QTDUNPAD', precision: 53 })
  qtdunpad: number;

  @Column('varchar', { name: 'CODBARRA', nullable: true, length: 25 })
  codbarra: string | null;

  @Column('varchar', { name: 'CONTROLE', length: 20, default: () => "' '" })
  controle: string;

  @Column('int', { name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'RECONTADO', length: 1, default: () => "'N'" })
  recontado: string;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgwroms)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;
}
