import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfpecEntity } from './tGFPEC.entity';

@Index('PK_TGFPEI', ['nupesagem', 'sequencia'], { unique: true })
@Entity('TGFPEI', { schema: 'SANKHYA' })
export class TgfpeiEntity {
  @Column('int', { primary: true, name: 'NUPESAGEM' })
  nupesagem: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('float', { name: 'TARA', nullable: true, precision: 53 })
  tara: number | null;

  @Column('datetime', { name: 'DHTARA', nullable: true })
  dhtara: Date | null;

  @Column('smallint', { name: 'BALANCATARA', nullable: true })
  balancatara: number | null;

  @Column('float', { name: 'BRUTO', nullable: true, precision: 53 })
  bruto: number | null;

  @Column('datetime', { name: 'DHBRUTO', nullable: true })
  dhbruto: Date | null;

  @Column('smallint', { name: 'BALANCABRUTO', nullable: true })
  balancabruto: number | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('varchar', { name: 'PESMANUAL', length: 1, default: () => "'N'" })
  pesmanual: string;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfpeis)
  @JoinColumn([{ name: 'CODUSUBRUTO', referencedColumnName: 'codusu' }])
  codusubruto: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfpeis2)
  @JoinColumn([{ name: 'CODUSUTARA', referencedColumnName: 'codusu' }])
  codusutara: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfpeis3)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfpecEntity, (tgfpecEntity) => tgfpecEntity.tgfpeis)
  @JoinColumn([{ name: 'NUPESAGEM', referencedColumnName: 'nupesagem' }])
  nupesagem2: TgfpecEntity;
}
