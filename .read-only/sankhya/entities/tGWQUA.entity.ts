import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGWQUA', ['codqua'], { unique: true })
@Entity('TGWQUA', { schema: 'SANKHYA' })
export class TgwquaEntity {
  @Column('int', { primary: true, name: 'CODQUA' })
  codqua: number;

  @Column('int', { name: 'CODTPDV' })
  codtpdv: number;

  @Column('datetime', { name: 'DTENTRADA' })
  dtentrada: Date;

  @Column('datetime', { name: 'DTSAIDA', nullable: true })
  dtsaida: Date | null;

  @Column('char', { name: 'SOLUCAO', nullable: true, length: 200 })
  solucao: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgwquas)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgwquas)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;
}
