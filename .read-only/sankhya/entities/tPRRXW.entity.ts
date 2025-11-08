import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TprwcpEntity } from './tPRWCP.entity';
import { TprcreEntity } from './tPRCRE.entity';

@Index('PK_TPRRXW', ['codwcp', 'codcre'], { unique: true })
@Entity('TPRRXW', { schema: 'SANKHYA' })
export class TprrxwEntity {
  @Column('int', { primary: true, name: 'CODWCP' })
  codwcp: number;

  @Column('int', { primary: true, name: 'CODCRE' })
  codcre: number;

  @Column('float', { name: 'QTDALOCADA', precision: 53, default: () => '(0)' })
  qtdalocada: number;

  @Column('char', { name: 'MODCAPACIDADE', length: 1, default: () => "'N'" })
  modcapacidade: string;

  @Column('float', { name: 'FATORCAPACIDADE', precision: 53 })
  fatorcapacidade: number;

  @ManyToOne(() => TprwcpEntity, (tprwcpEntity) => tprwcpEntity.tprrxws)
  @JoinColumn([{ name: 'CODWCP', referencedColumnName: 'codwcp' }])
  codwcp2: TprwcpEntity;

  @ManyToOne(() => TprcreEntity, (tprcreEntity) => tprcreEntity.tprrxws)
  @JoinColumn([{ name: 'CODCRE', referencedColumnName: 'codcre' }])
  codcre2: TprcreEntity;
}
