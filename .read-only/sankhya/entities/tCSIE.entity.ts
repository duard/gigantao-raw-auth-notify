import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfvenEntity } from './tGFVEN.entity';

@Index('PK_TCSIE', ['referencia', 'codvend'], { unique: true })
@Entity('TCSIE', { schema: 'SANKHYA' })
export class TcsieEntity {
  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('smallint', { primary: true, name: 'CODVEND' })
  codvend: number;

  @Column('float', { name: 'INDICE1', nullable: true, precision: 53 })
  indice1: number | null;

  @Column('float', { name: 'INDICE2', nullable: true, precision: 53 })
  indice2: number | null;

  @Column('float', { name: 'INDICE3', nullable: true, precision: 53 })
  indice3: number | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcsies)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfvenEntity, (tgfvenEntity) => tgfvenEntity.tcsies)
  @JoinColumn([{ name: 'CODVEND', referencedColumnName: 'codvend' }])
  codvend2: TgfvenEntity;
}
