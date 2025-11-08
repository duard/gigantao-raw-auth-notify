import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TSLCLU', ['codusu', 'tipo'], { unique: true })
@Entity('TSLCLU', { schema: 'SANKHYA' })
export class TslcluEntity {
  @Column('varchar', { primary: true, name: 'TIPO', length: 10 })
  tipo: string;

  @Column('datetime', { name: 'DHOCORRENCIA', nullable: true })
  dhocorrencia: Date | null;

  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tslclus, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu2: TsiusuEntity;
}
