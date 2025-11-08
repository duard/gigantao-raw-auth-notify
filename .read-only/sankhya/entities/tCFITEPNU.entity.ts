import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfcabEntity } from './tGFCAB.entity';

@Index('PK_TCFITEPNU', ['nunota', 'sequencia', 'codprod', 'numerofogo'], {
  unique: true,
})
@Entity('TCFITEPNU', { schema: 'SANKHYA' })
export class TcfitepnuEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('varchar', { primary: true, name: 'NUMEROFOGO', length: 100 })
  numerofogo: string;

  @Column('varchar', { name: 'DOT', nullable: true, length: 100 })
  dot: string | null;

  @Column('float', { name: 'SULCO', nullable: true, precision: 53 })
  sulco: number | null;

  @Column('int', { name: 'CODBANDAROD', nullable: true })
  codbandarod: number | null;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tcfitepnus)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tcfitepnus)
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;
}
