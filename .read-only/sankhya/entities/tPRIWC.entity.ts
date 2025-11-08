import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TprwcpEntity } from './tPRWCP.entity';

@Index('PK_TPRIWC', ['nuiwc'], { unique: true })
@Entity('TPRIWC', { schema: 'SANKHYA' })
export class TpriwcEntity {
  @Column('int', { primary: true, name: 'NUIWC' })
  nuiwc: number;

  @Column('char', { name: 'MOTIVO', length: 1, default: () => "'M'" })
  motivo: string;

  @Column('datetime', { name: 'DHINCIAL' })
  dhincial: Date;

  @Column('datetime', { name: 'DHFINAL' })
  dhfinal: Date;

  @Column('char', { name: 'SITUACAO', length: 1, default: () => "'P'" })
  situacao: string;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('varchar', { name: 'OBSERVACAO', length: 3103 })
  observacao: string;

  @ManyToOne(() => TprwcpEntity, (tprwcpEntity) => tprwcpEntity.tpriwcs)
  @JoinColumn([{ name: 'CODWCP', referencedColumnName: 'codwcp' }])
  codwcp: TprwcpEntity;
}
