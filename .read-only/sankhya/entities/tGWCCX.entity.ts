import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgwsepEntity } from './tGWSEP.entity';

@Index('PK_TGWCCX', ['nuseparacao', 'tipovolume', 'codvolume', 'sequencia'], {
  unique: true,
})
@Entity('TGWCCX', { schema: 'SANKHYA' })
export class TgwccxEntity {
  @Column('int', { primary: true, name: 'NUSEPARACAO' })
  nuseparacao: number;

  @Column('varchar', { primary: true, name: 'TIPOVOLUME', length: 1 })
  tipovolume: string;

  @Column('int', { primary: true, name: 'CODVOLUME' })
  codvolume: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'NUTAREFA' })
  nutarefa: number;

  @Column('smallint', { name: 'SEQTAREFA' })
  seqtarefa: number;

  @Column('float', { name: 'QTDE', nullable: true, precision: 53 })
  qtde: number | null;

  @Column('char', { name: 'CONFERIDO', length: 1, default: () => "'N'" })
  conferido: string;

  @ManyToOne(() => TgwsepEntity, (tgwsepEntity) => tgwsepEntity.tgwccxes)
  @JoinColumn([{ name: 'NUSEPARACAO', referencedColumnName: 'nuseparacao' }])
  nuseparacao2: TgwsepEntity;

  @ManyToOne(() => TgwsepEntity, (tgwsepEntity) => tgwsepEntity.tgwccxes2)
  @JoinColumn([{ name: 'NUSEPARACAO', referencedColumnName: 'nuseparacao' }])
  nuseparacao3: TgwsepEntity;
}
