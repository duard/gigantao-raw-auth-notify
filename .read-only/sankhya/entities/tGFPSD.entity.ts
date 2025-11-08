import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFPSD', ['nupesagem', 'sequencia'], { unique: true })
@Entity('TGFPSD', { schema: 'SANKHYA' })
export class TgfpsdEntity {
  @Column('int', { primary: true, name: 'NUPESAGEM' })
  nupesagem: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('float', { name: 'PESOTARA', nullable: true, precision: 53 })
  pesotara: number | null;

  @Column('float', { name: 'PESOBRUTO', nullable: true, precision: 53 })
  pesobruto: number | null;

  @Column('float', { name: 'DESCONTO', nullable: true, precision: 53 })
  desconto: number | null;

  @Column('float', { name: 'PESOLIQUIDO', nullable: true, precision: 53 })
  pesoliquido: number | null;

  @Column('datetime', { name: 'DHPESAGEM', nullable: true })
  dhpesagem: Date | null;

  @Column('varchar', { name: 'OBSEXCLUSAO', nullable: true, length: 200 })
  obsexclusao: string | null;

  @Column('char', {
    name: 'STATUS',
    nullable: true,
    length: 1,
    default: () => "'A'",
  })
  status: string | null;

  @Column('decimal', {
    name: 'REDUCAO',
    nullable: true,
    precision: 18,
    scale: 4,
  })
  reducao: number | null;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfpsds)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfpsds)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
