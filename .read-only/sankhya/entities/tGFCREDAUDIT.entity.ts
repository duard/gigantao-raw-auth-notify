import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFCREDAUDIT', ['codcliente', 'nomecampo', 'sequencia'], {
  unique: true,
})
@Entity('TGFCREDAUDIT', { schema: 'SANKHYA' })
export class TgfcredauditEntity {
  @Column('int', { primary: true, name: 'CODCLIENTE' })
  codcliente: number;

  @Column('varchar', { primary: true, name: 'NOMECAMPO', length: 50 })
  nomecampo: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'VLRANTERIOR', length: 150 })
  vlranterior: string;

  @Column('varchar', { name: 'VLRNOVO', length: 150 })
  vlrnovo: string;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfcredaudits)
  @JoinColumn([{ name: 'CODUSUALTER', referencedColumnName: 'codusu' }])
  codusualter: TsiusuEntity;
}
