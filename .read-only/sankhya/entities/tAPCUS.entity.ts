import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcsprjEntity } from './tCSPRJ.entity';
import { TaptanEntity } from './tAPTAN.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TAPCUS', ['numcustodia'], { unique: true })
@Entity('TAPCUS', { schema: 'SANKHYA' })
export class TapcusEntity {
  @Column('int', { primary: true, name: 'NUMCUSTODIA' })
  numcustodia: number;

  @Column('datetime', { name: 'DHREMESSA' })
  dhremessa: Date;

  @Column('char', { name: 'TIPOAMOSTRA', length: 1 })
  tipoamostra: string;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.tapcuses)
  @JoinColumn([{ name: 'CODPROJ', referencedColumnName: 'codproj' }])
  codproj: TcsprjEntity;

  @ManyToOne(() => TaptanEntity, (taptanEntity) => taptanEntity.tapcuses)
  @JoinColumn([{ name: 'CODTIPANA', referencedColumnName: 'codtipana' }])
  codtipana: TaptanEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tapcuses)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
