import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TprwcpEntity } from './tPRWCP.entity';
import { TprcreEntity } from './tPRCRE.entity';

@Index('PK_TPRRXP', ['codcre', 'codprodpa', 'controlepa'], { unique: true })
@Entity('TPRRXP', { schema: 'SANKHYA' })
export class TprrxpEntity {
  @Column('int', { primary: true, name: 'CODPRODPA' })
  codprodpa: number;

  @Column('varchar', {
    primary: true,
    name: 'CONTROLEPA',
    length: 11,
    default: () => "' '",
  })
  controlepa: string;

  @Column('int', { primary: true, name: 'CODCRE' })
  codcre: number;

  @Column('float', { name: 'QTDALOCADA', precision: 53 })
  qtdalocada: number;

  @Column('char', { name: 'MODCAPACIDADE', length: 1, default: () => "'N'" })
  modcapacidade: string;

  @Column('float', { name: 'FATORCAPACIDADE', precision: 53 })
  fatorcapacidade: number;

  @ManyToOne(() => TprwcpEntity, (tprwcpEntity) => tprwcpEntity.tprrxps)
  @JoinColumn([{ name: 'CODWCP', referencedColumnName: 'codwcp' }])
  codwcp: TprwcpEntity;

  @ManyToOne(() => TprcreEntity, (tprcreEntity) => tprcreEntity.tprrxps)
  @JoinColumn([{ name: 'CODCRE', referencedColumnName: 'codcre' }])
  codcre2: TprcreEntity;
}
