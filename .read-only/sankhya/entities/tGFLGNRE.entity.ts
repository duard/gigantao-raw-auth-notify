import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFLGNRE', ['nrolotegnre'], { unique: true })
@Entity('TGFLGNRE', { schema: 'SANKHYA' })
export class TgflgnreEntity {
  @Column('int', { primary: true, name: 'NROLOTEGNRE' })
  nrolotegnre: number;

  @Column('datetime', { name: 'DHLOTE' })
  dhlote: Date;

  @Column('smallint', { name: 'QTDTIT' })
  qtdtit: number;

  @Column('float', { name: 'VLRTOT', precision: 53 })
  vlrtot: number;

  @Column('text', { name: 'XMLLOTE' })
  xmllote: string;

  @Column('varchar', { name: 'NROPROTLOTE', length: 50 })
  nroprotlote: string;

  @Column('varchar', { name: 'STATUSLOTE', nullable: true, length: 1 })
  statuslote: string | null;

  @Column('varchar', { name: 'SITUACAOATUALLOTE', nullable: true, length: 500 })
  situacaoatuallote: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgflgnres)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
